const HashMap = require('../index');

describe('HashMap/', () => {
    test('test', () => {
        const map = new HashMap();
        map.set('1', 'string')
        expect(map.get('1')).toBe('string');
        map.set('1', undefined)
        expect(map.get('1')).toBe(undefined);

        map.set(1, 234)
        expect(map.get(1)).toBe(234);
        map.set(1, 'abc')
        expect(map.get(1)).toBe('abc');

        map.set({}, 123)
        expect(map.get({})).toBe(null);

        const keyObj = {};
        map.set(keyObj, { value: 'value' })
        expect(map.get(keyObj)).toEqual({ value: 'value' });
        map.set(keyObj, 0)
        expect(map.get(keyObj)).toBe(0);

        const keyArr = [];
        map.set(keyArr, { value: 'value2' })
        expect(map.get(keyArr)).toEqual({ value: 'value2' });
        expect(map.get(keyArr)).toEqual({ value: 'value2' });

        function keyFunc() {};
        map.set(keyFunc, keyArr)
        expect(map.get(keyFunc)).toBe(keyArr);

        map.set(null, 123)
        expect(map.get(null)).toBe(123);

        map.set(undefined, 234)
        expect(map.get(undefined)).toBe(234);
    });

});