export interface VideoProps {
  src: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  className?: string;
}

export default function Video({
  src,
  autoPlay = false,
  loop = false,
  muted = true,
  playsInline = true,
  className,
}: VideoProps) {
  const openInNewTab = () => {
    window.open(src, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="aspect-[4/3] overflow-hidden rounded-[22px]">
      <video
        src={src}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        className={className ?? 'h-full w-full rounded-[22px] object-cover cursor-pointer'}
        role="link"
        tabIndex={0}
        onClick={openInNewTab}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openInNewTab();
          }
        }}
      />
    </div>
  );
}
