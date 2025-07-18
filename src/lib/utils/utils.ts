
type NumericObject = {
    [key: string]: number;
};

export function combineNumericObjects(objects: NumericObject[]): NumericObject {
    const result: NumericObject = {};

    for (const obj of objects) {
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                result[key] = (result[key] || 0) + obj[key];
            }
        }
    }

    return result;
}