// ฟังก์ชันตัดข้อความให้มีความยาวไม่เกิน 50 คำ
export const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) {
      return text;
    }
    return words.slice(0, wordLimit).join(" ") + "...";
  };