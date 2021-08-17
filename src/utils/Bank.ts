type BankType = {
  personCount: number;
  title: string;
  ispb: string;
  date: string;
};

class BankUtils {
  mockBanks(): BankType[] {
    let banks = [];

    for (let index = 0; index < 324; index++) {
      const bank: BankType = {
        title: "Banco do Brasil - 031",
        personCount: 23,
        ispb: "00381699",
        date: index == 7 ? "past" : index < 7 ? "now" : "12/08/2020 - 18:30",
      };
      banks.push(bank);
    }

    return banks;
  }
}

export default BankUtils;
