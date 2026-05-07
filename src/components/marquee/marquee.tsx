import "./marquee.css";

export interface MarqueeProps {
  duration: number;
  color?: string;
  size?: number;
  children: React.ReactNode;
}

export const Marquee = (props: MarqueeProps) => {
  return (
    <div
      style={{
        display: "inline-block",
        width: "80%",
        paddingLeft: "90%",
        animation: `marquee ${props.duration}s linear infinite`,
      }}
    >
      <div style={{ color: props.color || "blue", fontSize: props.size || "22px", fontFamily: "Verdana, Geneva, sans-serif" }}>
        {props.children}
      </div>
    </div>
  );
};

export default Marquee;
