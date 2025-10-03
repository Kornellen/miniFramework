export abstract class BaseService {
  private static instance: BaseService;
  private constructor() {
    if (BaseService.instance) {
      return BaseService.instance;
    }

    BaseService.instance = this;
  }
}
