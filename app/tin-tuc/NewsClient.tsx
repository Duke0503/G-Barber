"use client";

const POSTS = [
  {
    id: 1,
    category: "Xu Hướng",
    title: "Top 10 Kiểu Tóc Nam Hot Nhất 2026",
    excerpt: "Từ Korean Perm đến French Crop, điểm qua các kiểu tóc nam đang thống trị đường phố Sài Gòn năm nay.",
    date: "20 Tháng 3, 2026",
    img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80",
    readTime: "5 phút",
  },
  {
    id: 2,
    category: "Kỹ Thuật",
    title: "Fade vs Taper: Khác Nhau Điều Gì?",
    excerpt: "Nhiều khách hàng thường nhầm lẫn giữa Fade và Taper. Bài viết này giải thích chi tiết sự khác biệt.",
    date: "15 Tháng 3, 2026",
    img: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80",
    readTime: "4 phút",
  },
  {
    id: 3,
    category: "Chăm Sóc",
    title: "Cách Dưỡng Tóc Nam Sau Khi Nhuộm",
    excerpt: "Tóc nhuộm dễ bị khô và gãy rụng. Đây là routine chăm sóc tóc sau nhuộm được các Master Barber G Barber khuyên dùng.",
    date: "10 Tháng 3, 2026",
    img: "https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&q=80",
    readTime: "6 phút",
  },
  {
    id: 4,
    category: "Phong Cách",
    title: "Central Cee Perm – Trend Mới Chiếm Lĩnh TikTok",
    excerpt: "Kiểu tóc uốn xoăn lấy cảm hứng từ rapper Central Cee đang cực hot. Tất cả những gì bạn cần biết.",
    date: "5 Tháng 3, 2026",
    img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80",
    readTime: "3 phút",
  },
  {
    id: 5,
    category: "Tips",
    title: "Cách Chọn Kiểu Tóc Phù Hợp Khuôn Mặt",
    excerpt: "Mặt tròn, mặt vuông, mặt dài – mỗi khuôn mặt có những kiểu tóc giúp bạn trông đẹp hơn.",
    date: "28 Tháng 2, 2026",
    img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=600&q=80",
    readTime: "7 phút",
  },
  {
    id: 6,
    category: "Sản Phẩm",
    title: "Pomade Gốc Dầu vs Gốc Nước – Nên Dùng Loại Nào?",
    excerpt: "Phân biệt hai loại pomade phổ biến nhất và hướng dẫn chọn loại phù hợp với kiểu tóc của bạn.",
    date: "20 Tháng 2, 2026",
    img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80",
    readTime: "5 phút",
  },
];

export default function NewsClient() {
  const [featured, ...rest] = POSTS;

  return (
    <div style={{ paddingTop: "80px", background: "#0a0a0a", minHeight: "100vh" }}>
      {/* Hero */}
      <div style={{ background: "#111", padding: "clamp(3rem, 8vw, 6rem) 0", textAlign: "center" }}>
        <div className="container">
          <span className="t-label gold">Tin Tức</span>
          <div className="gold-line" style={{ margin: "12px auto 20px" }} />
          <h1 className="t-h1">Xu Hướng & Tips</h1>
          <p className="t-body text-muted" style={{ maxWidth: 480, margin: "16px auto 0" }}>
            Cập nhật kiến thức tóc mới nhất từ đội ngũ Master Barber của G Barber Shop.
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingTop: "clamp(2rem, 6vw, 5rem)", paddingBottom: "clamp(2rem, 6vw, 5rem)" }}>
        {/* Featured post */}
        <div className="card" style={{ marginBottom: 2, overflow: "hidden" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          }}>
            <div style={{ aspectRatio: "16/9", overflow: "hidden" }}>
              <img src={featured.img} alt={featured.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ padding: "clamp(1.5rem, 4vw, 2.5rem)" }}>
              <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 12 }}>
                <span style={{
                  fontSize: 9, fontWeight: 800, letterSpacing: "0.15em",
                  background: "#D4AF37", color: "#000",
                  padding: "3px 8px", textTransform: "uppercase",
                }}>
                  {featured.category}
                </span>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>{featured.readTime} đọc</span>
              </div>
              <h2 style={{ fontSize: "clamp(18px, 3.5vw, 24px)", fontWeight: 800, marginBottom: 12, lineHeight: 1.3 }}>
                {featured.title}
              </h2>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: 20 }}>
                {featured.excerpt}
              </p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)" }}>{featured.date}</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#D4AF37" }}>Đọc thêm →</span>
              </div>
            </div>
          </div>
        </div>

        {/* Post grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
          gap: 2,
        }}>
          {rest.map((post) => (
            <div key={post.id} className="card" style={{ overflow: "hidden" }}>
              <div style={{ aspectRatio: "16/9", overflow: "hidden" }}>
                <img
                  src={post.img}
                  alt={post.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block",
                    transition: "transform 0.4s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
                />
              </div>
              <div style={{ padding: "16px" }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                  <span style={{
                    fontSize: 9, fontWeight: 800, letterSpacing: "0.12em",
                    color: "#D4AF37", textTransform: "uppercase",
                  }}>
                    {post.category}
                  </span>
                  <span style={{ fontSize: 10, color: "rgba(255,255,255,0.25)" }}>{post.readTime}</span>
                </div>
                <h3 style={{ fontSize: "clamp(13px, 2.5vw, 15px)", fontWeight: 800, marginBottom: 8, lineHeight: 1.4 }}>
                  {post.title}
                </h3>
                <p style={{
                  fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.6,
                  display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
                  overflow: "hidden", marginBottom: 12,
                }}>
                  {post.excerpt}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 10, color: "rgba(255,255,255,0.25)" }}>{post.date}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "#D4AF37" }}>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
