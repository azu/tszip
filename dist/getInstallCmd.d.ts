export declare type InstallCommand = 'yarn' | 'npm';
export default function getInstallCmd(): Promise<InstallCommand>;