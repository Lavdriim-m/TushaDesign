type Props = {
  centered?: boolean;
  className?: string;
};

export default function GoldDivider({ centered = false, className = '' }: Props) {
  return (
    <div className={`flex ${centered ? 'justify-center' : ''} ${className}`}>
      <div className="h-px w-16 bg-gold" style={{ backgroundColor: '#C9A96E' }} />
    </div>
  );
}
