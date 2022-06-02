import { ILogo } from "@components/Clients";
import { IService } from "@components/Services";
import { IMember } from "@components/Team";
import { IProcess } from "@components/WorkProcess";

export interface IAbout {
  workProcess: IProcess[];
  members: IMember[];
  clientLogos: ILogo[];
}
