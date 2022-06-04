import { ILogo } from "@components/Clients";
import { IFilter, IProject } from "@components/Portfolio";

interface IPortfolio {
  projects: IProject[];
  filters: IFilter[];
  clientLogos: ILogo[];
}
