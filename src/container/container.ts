import { BindingScopeEnum, Container } from "inversify";
import { SummonerService } from "../service/SummonerService";
import getDecorators from "inversify-inject-decorators";

export const container = new Container({ defaultScope: BindingScopeEnum.Singleton });
container
  .bind<SummonerService>(SummonerService.name)
  .to(SummonerService)
  .inSingletonScope();

export const lazyInject = getDecorators(container).lazyInject;
