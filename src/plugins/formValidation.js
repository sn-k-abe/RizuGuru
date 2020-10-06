export function formValidation(propertyName, value) {
    if (value && value.length > 0) {
        switch (propertyName) {
            case "name":
                return true;
            case "nameKana":
                // eslint-disable-next-line no-irregular-whitespace
                if (value.match(/^[ァ-ヶー　]+$/)) {
                    return true;
                } else {
                    return false;
                }
            case "phoneNumber":
                if (
                    value.match(/^0\d{2,3}-\d{1,4}-\d{4}$/) ||
                    value.match(/^0\d{1}-\d{4}-\d{4}$/) ||
                    value.match(/^0\d{2}-\d{4}-\d{4}$/) ||
                    value.match(/^0\d{3}-\d{6}$/)
                ) {
                    return true;
                } else {
                    return false;
                }
            case "address":
                return true;
            case "openingHours":
                return true;
            case "regularHoliday":
                return true;
            case "access":
                return true;
            case "paymentMethod":
                return true;
            case "price":
                if (value <= 1000 && value.match(/\d/)) {
                    return true;
                } else {
                    return false;
                }
            default:
                console.error("バリデーションにプロパティが登録されていません");
                return false;
        }
    } else {
        return false;
    }
}