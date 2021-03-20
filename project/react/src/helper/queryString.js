export default function parse(qs) {
    return qs.split('').filter((e, i) => {
        return !(e === '?' && i === 0);
    })
        .join('')
        .split('&')
        .map(e => e.split('='))
        .reduce((acc, current) => {
            acc[current[0]] = current[1];
            return acc;
        }, {});
}