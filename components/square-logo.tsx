/**
 * Logo component — Square (sharp corners).
 */
export function SquareLogo({
  className = "",
  style = {},
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        flexDirection: "column",
        rowGap: "6%",
        alignItems: "flex-start",
        color: "currentColor",
      }}
      aria-hidden
    >
      <div
        style={{
          width: "75%",
          flex: 1,
          minHeight: 4,
          backgroundColor: "currentColor",
          borderRadius: 0,
        }}
      />
      <div
        style={{
          width: "90%",
          flex: 1,
          minHeight: 4,
          alignSelf: "flex-end",
          backgroundColor: "currentColor",
          borderRadius: 0,
        }}
      />
      <div
        style={{
          width: "75%",
          flex: 1,
          minHeight: 4,
          backgroundColor: "currentColor",
          borderRadius: 0,
        }}
      />
    </div>
  );
}
