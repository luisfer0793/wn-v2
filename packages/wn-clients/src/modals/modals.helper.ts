import InbodyPassesWarningModal from './Inbody/PassesWarning/InbodyPassesWarningModal.component';

export const WNModals = {
  InbodyPassesWarning: InbodyPassesWarningModal,
};

declare module '@mantine/modals' {
  export interface MantineModalsOverride {
    modals: typeof WNModals;
  }
}
