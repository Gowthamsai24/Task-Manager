// utils/helper.js
export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const addThousandsSeparator=(num)=>{
  if(num==null || isNaN(num)) return "";
  const [integerPart,fractionalPart]=num.toString().split(".");
  const formattedInteger=integerPart.replace(/\B(?=(\d{3})+(?!\d))/g,",");
  return fractionalPart
  ? `${formattedInteger}.${fractionalPart}`
  : formattedInteger;
};

export const getInitials = (name) => {
  if (!name) return "";
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return parts[0][0]?.toUpperCase() || "";
};

export const getAvatarBgColor = (name) => {
  if (!name) return "bg-gray-200 text-gray-600";
  const colors = [
    "bg-indigo-100 text-indigo-700",
    "bg-purple-100 text-purple-700",
    "bg-pink-100 text-pink-700",
    "bg-sky-100 text-sky-700",
    "bg-emerald-100 text-emerald-700",
    "bg-amber-100 text-amber-700",
    "bg-rose-100 text-rose-700",
  ];
  let sum = 0;
  for (let i = 0; i < name.length; i++) {
    sum += name.charCodeAt(i);
  }
  return colors[sum % colors.length];
};