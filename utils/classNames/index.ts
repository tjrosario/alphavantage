export function classNames(...classes: any) {
  return classes
    .reduce((compiledClasses: any, classItem: any) => {
      if (!classItem || classItem === true) {
        return compiledClasses;
      }

      if (typeof classItem === 'object') {
        const dynamicClasses = Object.keys(classItem).filter((className) => {
          const { [className]: classEval } = classItem;

          return typeof classEval === 'function' ? classEval() : classEval;
        });

        return dynamicClasses.length
          ? [...compiledClasses, ...dynamicClasses]
          : compiledClasses;
      }

      return [...compiledClasses, classItem];
    }, [])
    .join(' ');
}
