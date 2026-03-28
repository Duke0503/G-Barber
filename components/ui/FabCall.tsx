import { PhoneOutlined } from "@ant-design/icons";
import { BRAND } from "@/lib/constants/brand";

export default function FabCall() {
  return (
    <a href={`tel:${BRAND.phone}`} className="fab-call" aria-label="Gọi ngay">
      <PhoneOutlined style={{ fontSize: 18 }} />
      <span className="fab-text">{BRAND.phoneDisplay}</span>
    </a>
  );
}
