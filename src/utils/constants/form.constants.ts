export const formatDate = "DD-MM-YYYY";
export const formatDateFilter = "YYYY-MM-DD";
export const formatDatepicker = "dd-MM-yyyy";

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const passwordRegExp =
  /^(?=(.*\d){2})(?=(.*[a-z]){2})(?=(.*[A-Z]){2})(?=(.*[#?!@$%^/&*_()~`:;'"\\\[+={}\]\/>\.\<,|-]){2}).{8,}$/;

export const nameRegExp =
  /^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9\sàáãäạảăắằẳẵặâấầẩẫậèéẹẻëẽêềếểễệđìíĩîïỉịòóõọỏôốồổỗộœçơớờởỡợùúũụûüÿủưứừửữựỳỵỷỹýÀÁÃẠÄẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺÊËẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝÎÏŒÛÜŸÇ._]+(?<![_.])$/;

export const passwordDontHaveSpacesRegExt = /^\S*$/;
