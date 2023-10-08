import mixpanel from 'mixpanel-browser';
import judgeIsMobile from './judgeIsMobile';

export type MixpanelModuleType =
  | 'Top Menu'
  | 'NFT Module'
  | 'P2E'
  | 'DAO'
  | 'GameFi'
  | 'Web3 Assets'
  | 'Buy Cryptos'
  | 'Bottom Module'
  | 'Get Start';

const mixpanelTrack: (
  arg0: string,
  arg1: {
    eventType: 'Click' | 'View';
    fromModule?: MixpanelModuleType;
    terminalSource?: 'PC' | 'H5';
  },
  arg3?: {
    disabledTerminalType?: boolean;
  }
) => void = (eventName, { eventType, fromModule, terminalSource }, options) => {
  const { flag } = judgeIsMobile();
  const currentTerminal = flag ? 'H5' : 'PC';
  mixpanel.track(eventName, {
    Process: 'xBank Official Website',
    'Current Page': 'Homepage',
    'Type of terminal': !options?.disabledTerminalType
      ? currentTerminal
      : undefined,
    'Event Type': eventType,
    Module: fromModule,
    'Terminal Sources': terminalSource,
  });
};

export default mixpanelTrack;
