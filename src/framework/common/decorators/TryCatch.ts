type ErrorConstructor<T extends Error> = new (...args: any[]) => T;

export function TryCatch<T extends Error>(typeOfError: ErrorConstructor<T>) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const orignalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const req = args[0];
      const res = args[1];

      try {
        return orignalMethod.apply(this, args);
      } catch (error) {
        if (error instanceof typeOfError) {
          console.error(
            `Cought ${typeOfError.name} in ${target.constructor.name}.${propertyKey}: `,
            (error as T).message
          );
        } else {
          throw error;
        }
        res.status(500).send("Internal Server Error");
      }
    };
    return descriptor;
  };
}
