type AmountDisplayProps = {
  label?: string;
  amount: number;
};

export default function AmountDisplay({ label, amount }: AmountDisplayProps) {
  return (
    <p className=" text-2xl text-slate-600 font-bold">
    {label && `${label}:`}   <span className=" font-black text-slate-600">${amount}</span>
    </p>
  );
}
