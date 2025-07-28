module.exports.dataFormat = (data) => {
    let formatted = data.map(obj => {
        const nameObj = obj.name;
        const addressObj = obj.address;

        const fullName = `${nameObj.firstName} ${nameObj.lastName}`;
        const fullAddress = [
            addressObj.line1,
            addressObj.line2,
            addressObj.city,
            addressObj.state
        ].join(",")

        const { name, age, address, ...additionalinfo } = obj;

        const additionalinfoStr = Object.entries(additionalinfo)
            .map(([key, value]) => `${key}: ${value}`)
            .join(", ");

        return {
            name: fullName,
            address: fullAddress,
            age: Number(age),
            additionalInfo: additionalinfoStr 
        }
    });
    return formatted;
}