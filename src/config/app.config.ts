interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Hospital Administrator'],
  customerRoles: ['Customer'],
  tenantRoles: ['Hospital Administrator', 'Medical Staff', 'IT Support Staff'],
  tenantName: 'Company',
  applicationName: 'Hospital Management Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read personal information',
    'Edit personal information',
    'Book an appointment',
    'View appointment details',
  ],
  ownerAbilities: [
    'Manage user information',
    'Manage company details',
    'Manage hospital data',
    'Manage patient records',
    'Manage doctor profiles',
    'Manage appointment schedules',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/9426e848-92ff-4ffc-b826-59b3a83607e7',
};
