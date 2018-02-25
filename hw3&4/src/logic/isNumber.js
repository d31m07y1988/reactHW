export default function isNumber(item) {
    return !!item.match(/^[-]?\d*\.?\d*$/);
}