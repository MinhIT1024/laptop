const products = [
  // ---Lap APPLE ---
  {
    id: '1',
    name: 'MacBook Air M2 2022',
    price: 24990000,
    image: './images/macbook3.jpg',
    cpu: 'Apple M2 (8-core CPU, 8-core GPU)',
    ram: '8GB Unified Memory',
    ssd: '256GB SSD',
    description: `MacBook Air M2 2022 là một bước tiến vượt bậc của dòng laptop mỏng nhẹ nhất từ Apple. Với thiết kế hoàn toàn mới, máy không còn hình dáng vát mỏng dần mà thay vào đó là sự vuông vức, tinh tế và sang trọng tương tự các dòng Pro cao cấp.

[THIẾT KẾ ĐỘT PHÁ VÀ SIÊU DI ĐỘNG]
Máy chỉ dày 11.3mm và nặng 1.24kg, cực kỳ linh hoạt cho những người thường xuyên di chuyển. Vỏ nhôm nguyên khối bền bỉ với 4 màu sắc thời thượng: Silver, Space Gray, Starlight và Midnight. Apple đã loại bỏ hoàn toàn quạt tản nhiệt, giúp máy hoạt động hoàn toàn yên tĩnh ngay cả khi xử lý các tác vụ nặng nhất.

[HIỆU NĂNG VƯỢT TRỘI VỚI CHIP M2]
Chip Apple M2 mang lại hiệu năng CPU nhanh hơn 18% và GPU mạnh hơn 35% so với thế hệ M1. Với 20 tỷ bóng bán dẫn, M2 xử lý mượt mà các tác vụ từ văn phòng cơ bản đến chỉnh sửa video 4K ProRes hay thiết kế đồ họa chuyên nghiệp. Băng thông bộ nhớ 100GB/s giúp việc truy xuất dữ liệu cực nhanh.

[MÀN HÌNH LIQUID RETINA ĐỈNH CAO]
Màn hình 13.6 inch lớn hơn với viền mỏng hơn, độ sáng lên đến 500 nits (sáng hơn 25% so với trước). Hỗ trợ 1 tỷ màu và dải màu rộng P3 giúp hình ảnh trở nên sống động, chân thực đến từng chi tiết. Công nghệ True Tone tự động điều chỉnh nhiệt độ màu theo môi trường xung quanh.

[KẾT NỐI VÀ TRẢI NGHIỆM NGƯỜI DÙNG]
Thời lượng pin ấn tượng lên đến 18 giờ sử dụng liên tục. Cổng sạc MagSafe 3 quay trở lại giúp việc sạc pin an toàn và giải phóng 2 cổng Thunderbolt cho các phụ kiện khác. Hệ thống âm thanh 4 loa hỗ trợ Spatial Audio mang lại không gian âm nhạc sống động. Camera FaceTime HD 1080p cho chất lượng cuộc gọi video sắc nét vượt trội.`,
    category: 'Apple'
  },
  {
    id: '7',
    name: 'MacBook Pro 14 inch M3',
    price: 39990000,
    image: './images/macbook2.jpg',
    cpu: 'Apple M3 (8-core CPU, 10-core GPU)',
    ram: '8GB Unified Memory',
    ssd: '512GB SSD',
    description: `MacBook Pro 14 inch M3 là chiếc laptop chuyên nghiệp mạnh mẽ nhất dành cho những người cần sự cân bằng giữa hiệu năng và tính di động.

[SỨC MẠNH CỦA THẾ HỆ CHIP 3NM]
Chip M3 là chip máy tính cá nhân đầu tiên được sản xuất trên tiến trình 3nm tiên tiến. Kiến trúc GPU thế hệ mới giới thiệu tính năng Dynamic Caching, giúp tối ưu hóa bộ nhớ và tăng tốc độ xử lý đồ họa đáng kể. Hỗ trợ Ray Tracing bằng phần cứng mang lại ánh sáng và phản chiếu chân thực trong game và ứng dụng 3D.

[MÀN HÌNH LIQUID RETINA XDR TỐT NHẤT THẾ GIỚI]
Màn hình Liquid Retina XDR 14.2 inch sở hữu độ tương phản 1.000.000:1 và độ sáng cực đỉnh lên đến 1600 nits cho nội dung HDR. Công nghệ ProMotion 120Hz giúp mọi chuyển động trên màn hình trở nên mượt mà tuyệt đối.

[HỆ THỐNG TẢN NHIỆT VÀ PIN]
Khác với dòng Air, dòng Pro được trang bị hệ thống tản nhiệt chủ động với quạt siêu êm, cho phép duy trì hiệu năng đỉnh cao trong thời gian dài. Thời lượng pin kỷ lục lên đến 22 giờ sử dụng, giúp bạn làm việc xuyên suốt nhiều ngày mà không cần sạc.

[KẾT NỐI CHUYÊN NGHIỆP]
Máy trang bị đầy đủ các cổng kết nối cần thiết: HDMI xuất hình 4K/8K, khe cắm thẻ nhớ SDXC cho nhiếp ảnh gia, 2 cổng Thunderbolt 4 và cổng sạc MagSafe 3. Bàn phím Magic Keyboard với hàng phím chức năng đầy đủ và Touch ID bảo mật cao.`,
    category: 'Apple'
  },
  {
    id: '8',
    name: 'MacBook Pro 16 inch M3 Max',
    price: 79990000,
    image: './images/macbookpro16m3max.jpg',
    cpu: 'Apple M3 Max (14-core CPU, 30-core GPU)',
    ram: '36GB Unified Memory',
    ssd: '1TB SSD',
    description: `MacBook Pro 16 inch M3 Max là đỉnh cao công nghệ của Apple, một trạm làm việc di động thực thụ dành cho các chuyên gia dựng phim 8K, lập trình viên AI và kiến trúc sư.

[HIỆU NĂNG VÔ ĐỐI]
Với chip M3 Max, máy sở hữu sức mạnh kinh ngạc với 14 nhân CPU và 30 nhân GPU. Khả năng xử lý các mô hình 3D phức tạp hay render video độ phân giải siêu cao nhanh hơn gấp nhiều lần so với các dòng laptop chạy chip Intel mạnh nhất. Bộ nhớ thống nhất lên đến 36GB cho phép xử lý các tệp dữ liệu khổng lồ một cách nhẹ nhàng.

[KHÔNG GIAN HIỂN THỊ RỘNG LỚN]
Màn hình 16.2 inch Liquid Retina XDR mang lại không gian làm việc bao la. Độ phân giải cực cao cùng dải màu rộng giúp việc chỉnh sửa hình ảnh đạt độ chính xác tuyệt đối. Hệ thống âm thanh 6 loa với loa trầm khử lực mang lại âm thanh sâu lắng, mạnh mẽ như trong phòng thu.

[THIẾT KẾ VÀ ĐỘ BỀN]
Vỏ nhôm tái chế 100% cực kỳ chắc chắn. Màu Space Black mới với lớp phủ anodize giúp giảm thiểu dấu vân tay đáng kể. Hệ thống tản nhiệt được tối ưu hóa để máy luôn mát mẻ ngay cả khi đang render những project nặng nhất.

[THỜI LƯỢNG PIN VÀ SẠC NHANH]
Dù sở hữu cấu hình cực khủng, máy vẫn duy trì được thời lượng pin lên đến 22 giờ. Hỗ trợ sạc nhanh qua cổng MagSafe 3, giúp nạp lại năng lượng nhanh chóng để bạn không bao giờ bị gián đoạn công việc.`,
    category: 'Apple'
  },
  {
    id: '9',
    name: 'MacBook Air 15 inch M2',
    price: 29990000,
    image: './images/macbook1.jpg',
    cpu: 'Apple M2 (8-core CPU, 10-core GPU)',
    ram: '8GB Unified Memory',
    ssd: '256GB SSD',
    description: `MacBook Air 15 inch M2 là sự kết hợp hoàn hảo giữa màn hình lớn của dòng Pro và sự mỏng nhẹ huyền thoại của dòng Air.

[MÀN HÌNH LỚN TRONG THÂN HÌNH MỎNG]
Lần đầu tiên Apple mang màn hình 15.3 inch lên dòng Air. Với độ mỏng chỉ 11.5mm, đây là chiếc laptop 15 inch mỏng nhất thế giới. Bạn sẽ có không gian làm việc rộng rãi hơn để đa nhiệm nhiều cửa sổ mà vẫn dễ dàng mang theo bên mình mọi nơi.

[HIỆU NĂNG MẠNH MẼ VÀ YÊN TĨNH]
Chip M2 với 10 nhân GPU cho khả năng xử lý đồ họa tốt hơn phiên bản 13 inch cơ bản. Máy vẫn duy trì thiết kế không quạt, mang lại sự yên tĩnh tuyệt đối khi làm việc trong thư viện hay văn phòng.

[HỆ THỐNG ÂM THANH NÂNG CẤP]
Hệ thống âm thanh 6 loa mới với loa trầm khử lực mang lại trải nghiệm nghe nhạc và xem phim sống động hơn hẳn phiên bản 13 inch. Hỗ trợ Spatial Audio và Dolby Atmos cho không gian âm thanh 3 chiều.

[PIN VÀ TIỆN ÍCH]
Thời lượng pin 18 giờ đảm bảo bạn có thể làm việc cả ngày dài mà không cần mang theo bộ sạc. Camera 1080p và hệ thống 3 micro chất lượng phòng thu giúp các cuộc họp online luôn đạt chất lượng tốt nhất.`,
    category: 'Apple'
  },
  {
    id: '10',
    name: 'MacBook Pro 13 inch M2',
    price: 30500000,
    image: './images/macbook4.jpg',
    cpu: 'Apple M2 (8-core CPU, 10-core GPU)',
    ram: '8GB Unified Memory',
    ssd: '256GB SSD',
    description: `MacBook Pro 13 inch M2 giữ lại thiết kế cổ điển được yêu thích với Touch Bar thông minh và hiệu năng mạnh mẽ nhờ hệ thống tản nhiệt chủ động.

[HIỆU NĂNG DUY TRÌ ỔN ĐỊNH]
Nhờ có quạt tản nhiệt, chip M2 trên dòng Pro 13 inch có thể chạy ở mức xung nhịp cao nhất trong thời gian dài mà không bị giảm hiệu năng do nhiệt. Đây là lựa chọn tuyệt vời cho những người thường xuyên render video ngắn hoặc xử lý ảnh hàng loạt.

[TOUCH BAR VÀ TOUCH ID]
Thanh Touch Bar cảm ứng thay đổi linh hoạt theo từng ứng dụng giúp bạn thao tác nhanh chóng các phím tắt. Touch ID tích hợp giúp đăng nhập và thanh toán Apple Pay chỉ với một chạm cực kỳ bảo mật.

[MÀN HÌNH RETINA RỰC RỠ]
Màn hình Retina 13.3 inch với độ sáng 500 nits và dải màu P3 cho hình ảnh sắc nét và màu sắc chuẩn xác. Công nghệ True Tone bảo vệ mắt người dùng khi sử dụng trong thời gian dài.

[PIN VÀ KẾT NỐI]
Thời lượng pin lên đến 20 giờ, vượt trội hơn so với dòng Air M2. Máy trang bị 2 cổng Thunderbolt/USB 4 cho tốc độ truyền dữ liệu cực nhanh và khả năng xuất màn hình rời độ phân giải cao.`,
    category: 'Apple'
  },

  // ---Lap DELL ---
  {
    id: '2',
    name: 'Dell XPS 13 9315',
    price: 28500000,
    image: './images/DellXPS.jpg',
    cpu: 'Intel Core i5-1230U (10 cores, 12MB Cache)',
    ram: '16GB LPDDR5 5200MHz',
    ssd: '512GB PCIe NVMe',
    description: `Dell XPS 13 9315 tiếp tục khẳng định vị thế dẫn đầu trong phân khúc ultrabook cao cấp với sự kết hợp hoàn hảo giữa tính di động và hiệu suất ổn định.

[TINH HOA THIẾT KẾ VÀ VẬT LIỆU]
Được chế tác từ nhôm CNC chính xác đến từng milimet, XPS 13 9315 mang lại cảm giác vô cùng chắc chắn và cao cấp. Với trọng lượng chỉ 1.17kg, đây là người bạn đồng hành lý tưởng cho những chuyến công tác hay làm việc tại quán cà phê. Dell đã tối ưu hóa bo mạch chủ nhỏ hơn 1.8 lần để máy đạt được độ mỏng ấn tượng.

[MÀN HÌNH INFINITYEDGE KHÔNG VIỀN]
Màn hình 13.4 inch FHD+ với tỷ lệ 16:10 mang lại không gian hiển thị rộng hơn 6.6% so với màn hình 16:9 truyền thống. Độ sáng 500 nits và công nghệ chống chói giúp bạn làm việc thoải mái ngay cả dưới điều kiện ánh sáng mạnh. Độ phủ màu 100% sRGB đảm bảo màu sắc luôn trung thực.

[HIỆU NĂNG TỐI ƯU CHO VĂN PHÒNG]
Trang bị vi xử lý Intel Core i5 thế hệ 12 dòng U, máy được tối ưu hóa để hoạt động mát mẻ và tiết kiệm điện năng mà vẫn xử lý nhanh chóng các tác vụ đa nhiệm văn phòng, duyệt web hàng chục tab hay chỉnh sửa ảnh 2D mượt mà. RAM LPDDR5 tốc độ cao giúp việc chuyển đổi giữa các ứng dụng tức thì.

[TRẢI NGHIỆM NGƯỜI DÙNG CAO CẤP]
Bàn phím tràn cạnh với hành trình phím 1.0mm cho cảm giác gõ phím nhạy bén. Touchpad phủ kính rộng rãi, hỗ trợ đa điểm cực tốt. Hệ thống loa kép công suất lớn mang lại âm thanh trong trẻo, to rõ cho các cuộc họp trực tuyến. Camera hồng ngoại hỗ trợ Windows Hello giúp đăng nhập bằng khuôn mặt cực nhanh.`,
    category: 'Dell'
  },
  {
    id: '11',
    name: 'Dell XPS 15 9530',
    price: 45900000,
    image: './images/dellxps1.jpg',
    cpu: 'Intel Core i7-13700H (14 cores, 24MB Cache)',
    ram: '16GB DDR5 4800MHz',
    ssd: '512GB PCIe NVMe',
    description: `Dell XPS 15 9530 là chiếc laptop 15 inch mạnh mẽ nhất của Dell, được thiết kế dành riêng cho các nhà sáng tạo nội dung chuyên nghiệp.

[THIẾT KẾ SANG TRỌNG VỚI SỢI CARBON]
Sự kết hợp giữa nhôm CNC ở mặt ngoài và sợi carbon ở phần kê tay không chỉ mang lại vẻ đẹp đẳng cấp mà còn giúp máy tản nhiệt tốt hơn và cảm giác chạm êm ái. Màn hình InfinityEdge 4 cạnh siêu mỏng giúp máy có kích thước chỉ tương đương các dòng laptop 14 inch thông thường.

[HIỆU NĂNG ĐỒ HỌA MẠNH MẼ]
Sở hữu CPU Intel Core i7 thế hệ 13 dòng H hiệu năng cao và card đồ họa rời NVIDIA GeForce RTX 4050. Máy dễ dàng xử lý các tác vụ dựng phim 4K, thiết kế 3D hay chạy các phần mềm kỹ thuật nặng. Hệ thống tản nhiệt quạt kép và ống dẫn nhiệt lớn đảm bảo máy luôn ổn định.

[MÀN HÌNH CHUẨN ĐỒ HỌA]
Màn hình 15.6 inch FHD+ với độ sáng 500 nits và độ phủ màu 100% sRGB. Công nghệ Eyesafe giúp giảm ánh sáng xanh có hại mà không làm sai lệch màu sắc, bảo vệ mắt khi làm việc cường độ cao.

[ÂM THANH VÀ KẾT NỐI]
Hệ thống 4 loa với công nghệ Waves MaxxAudio Pro mang lại âm thanh vòm sống động. Máy trang bị 2 cổng Thunderbolt 4, 1 cổng USB-C 3.2 và khe cắm thẻ nhớ SD full-size - một tính năng cực kỳ quan trọng đối với các nhiếp ảnh gia và quay phim.`,
    category: 'Dell'
  },
  {
    id: '12',
    name: 'Dell Inspiron 16 5630',
    price: 21500000,
    image: './images/dellinspiron.jpg',
    cpu: 'Intel Core i5-1335U (10 cores, 12MB Cache)',
    ram: '16GB LPDDR5 4800MHz',
    ssd: '512GB PCIe NVMe',
    description: `Dell Inspiron 16 5630 là mẫu laptop văn phòng màn hình lớn lý tưởng cho những người cần không gian làm việc rộng rãi và hiệu năng ổn định.

[MÀN HÌNH 16 INCH TỶ LỆ 16:10]
Màn hình 16 inch độ phân giải FHD+ mang lại không gian hiển thị cực kỳ thoải mái cho việc lập bảng tính Excel hay soạn thảo văn bản. Tỷ lệ 16:10 giúp bạn đọc được nhiều nội dung hơn mà không cần cuộn trang nhiều lần.

[HIỆU NĂNG THẾ HỆ 13 MỚI NHẤT]
Trang bị CPU Intel Core i5-1335U thế hệ 13 mới nhất, máy xử lý mượt mà mọi tác vụ văn phòng và học tập. RAM 16GB LPDDR5 cho khả năng đa nhiệm tuyệt vời, không lo giật lag khi mở nhiều ứng dụng cùng lúc.

[THIẾT KẾ HIỆN ĐẠI VÀ BỀN BỈ]
Vỏ máy bằng nhôm màu bạc sang trọng, bản lề ErgoLift giúp nâng bàn phím lên một góc nhỏ khi mở máy, tạo cảm giác gõ phím thoải mái và hỗ trợ tản nhiệt tốt hơn. Máy đạt độ bền chuẩn quân đội, đảm bảo hoạt động ổn định trong nhiều điều kiện môi trường.

[TIỆN ÍCH VÀ BẢO MẬT]
Bàn phím có đèn nền hỗ trợ làm việc ban đêm, cảm biến vân tay tích hợp trên nút nguồn giúp bảo mật dữ liệu. Camera FHD 1080p tích hợp màn che vật lý bảo vệ quyền riêng tư. Công nghệ sạc nhanh ExpressCharge giúp sạc pin lên 80% chỉ trong 60 phút.`,
    category: 'Dell'
  },
  {
    id: '13',
    name: 'Dell Vostro 3520',
    price: 14900000,
    image: './images/Dellvostro.jpg',
    cpu: 'Intel Core i5-1235U (10 cores, 12MB Cache)',
    ram: '8GB DDR4 3200MHz',
    ssd: '256GB PCIe NVMe',
    description: `Dell Vostro 3520 là chiếc laptop bền bỉ, giá rẻ dành cho doanh nghiệp nhỏ, giáo viên và sinh viên với đầy đủ các tính năng cần thiết.

[MÀN HÌNH 120HZ MƯỢT MÀ]
Điểm nổi bật nhất trong tầm giá là màn hình 15.6 inch FHD với tần số quét 120Hz, giúp mọi chuyển động và thao tác cuộn trang trở nên mượt mà hơn hẳn các đối thủ cùng phân khúc. Công nghệ Dell ComfortView giúp giảm ánh sáng xanh bảo vệ mắt.

[HIỆU NĂNG ỔN ĐỊNH CHO CÔNG VIỆC]
CPU Intel Core i5 thế hệ 12 dòng U mang lại hiệu năng ổn định cho các tác vụ văn phòng, kế toán và học tập online. Khả năng nâng cấp RAM và SSD dễ dàng giúp máy có thể đồng hành cùng bạn trong thời gian dài.

[THIẾT KẾ THỰC DỤNG]
Vỏ máy bằng nhựa cao cấp với vân nhám chống bám vân tay và trầy xước. Bàn phím đầy đủ với cụm phím số bên phải cực kỳ tiện lợi cho việc nhập liệu số liệu. Touchpad rộng rãi, hỗ trợ các thao tác vuốt chạm đa điểm chính xác.

[KẾT NỐI ĐA DẠNG]
Máy trang bị đầy đủ các cổng kết nối phổ biến: HDMI, USB 3.2, cổng mạng LAN RJ45 và khe đọc thẻ nhớ SD. Đây là những kết nối cực kỳ quan trọng trong môi trường làm việc văn phòng và trường học.`,
    category: 'Dell'
  },
  {
    id: '14',
    name: 'Dell Latitude 7440',
    price: 32500000,
    image: './images/delllatitude.jpg',
    cpu: 'Intel Core i7-1355U (10 cores, 12MB Cache)',
    ram: '16GB LPDDR5 4800MHz',
    ssd: '512GB PCIe NVMe',
    description: `Dell Latitude 7440 là dòng laptop doanh nhân cao cấp nhất của Dell, nổi tiếng với độ bền cực cao, tính năng bảo mật hàng đầu và khả năng quản lý từ xa.

[ĐỘ BỀN CHUẨN QUÂN ĐỘI]
Máy được hoàn thiện từ hợp kim magie siêu nhẹ và bền, đạt tiêu chuẩn MIL-STD 810H của quân đội Mỹ. Trọng lượng chỉ khoảng 1.3kg giúp các doanh nhân dễ dàng mang theo trong các chuyến công tác dài ngày.

[BẢO MẬT ĐA LỚP]
Latitude 7440 trang bị hàng loạt công nghệ bảo mật: SafeID, SafeBIOS, cảm biến vân tay, camera hồng ngoại nhận diện khuôn mặt và đầu đọc thẻ thông minh. Tính năng Onlooker Detection sẽ cảnh báo khi có người nhìn trộm màn hình của bạn.

[HIỆU NĂNG MẠNH MẼ VÀ THÔNG MINH]
Trang bị chip Intel Core i7 thế hệ 13 vPro, tối ưu cho việc quản lý doanh nghiệp. Công nghệ Dell Optimizer sử dụng AI để học hỏi thói quen của bạn, từ đó tối ưu hóa hiệu năng ứng dụng, thời lượng pin và chất lượng âm thanh cuộc gọi.

[MÀN HÌNH VÀ ÂM THANH]
Màn hình 14 inch FHD+ với tỷ lệ 16:10, độ sáng cao và chống chói tốt. Hệ thống loa kép với công nghệ khử tiếng ồn bằng AI giúp các cuộc họp trực tuyến luôn diễn ra suôn sẻ với âm thanh trong trẻo nhất.`,
    category: 'Dell'
  },

  // ---Lap GAMING ---
  {
    id: '3',
    name: 'ASUS ROG Zephyrus G14',
    price: 32900000,
    image: './images/Asus-rog.jpg',
    cpu: 'AMD Ryzen 7 6800HS (8 cores, 16 threads)',
    ram: '16GB DDR5 4800MHz',
    ssd: '512GB M.2 NVMe PCIe 4.0',
    description: `ASUS ROG Zephyrus G14 là minh chứng cho việc một chiếc laptop gaming không nhất thiết phải to nặng và cồng kềnh. Đây là sự lựa chọn số 1 cho game thủ cần sự di động.

[SỨC MẠNH TỪ AMD VÀ ĐỒ HỌA ĐỈNH CAO]
Sự kết hợp giữa CPU Ryzen 7 6800HS và GPU Radeon RX 6700S mang lại hiệu năng chơi game đỉnh cao. Công nghệ AMD SmartShift Max và Smart Access Memory giúp tối ưu hóa sức mạnh giữa CPU và GPU, cho phép bạn chiến mọi tựa game AAA ở mức thiết lập cao. MUX Switch tích hợp giúp giảm độ trễ và tăng hiệu năng lên đến 10%.

[MÀN HÌNH ROG NEBULA CHUẨN ĐỒ HỌA]
Màn hình 14 inch QHD+ với tần số quét 120Hz, thời gian phản hồi 3ms và đạt chuẩn Pantone Validated. Độ phủ màu 100% DCI-P3 giúp máy không chỉ chơi game tốt mà còn là công cụ đắc lực cho các nhà sáng tạo nội dung, editor video chuyên nghiệp. Tỷ lệ 16:10 mang lại không gian hiển thị rộng rãi hơn.

[TẢN NHIỆT BUỒNG HƠI TIÊN TIẾN]
Hệ thống tản nhiệt Vapor Chamber (buồng hơi) bao phủ 48% các linh kiện quan trọng, giúp máy duy trì nhiệt độ ổn định ngay cả khi hoạt động ở cường độ cao. Keo tản nhiệt kim loại lỏng Thermal Grizzly giúp giảm nhiệt độ CPU lên đến 10°C so với keo thông thường. Công nghệ 0dB giúp máy hoàn toàn yên tĩnh khi xử lý tác vụ nhẹ.

[PHONG CÁCH ĐỘC BẢN VỚI ANIME MATRIX]
Mặt lưng AniMe Matrix với hàng ngàn bóng LED nhỏ cho phép hiển thị hình ảnh động, thông báo hoặc nháy theo nhạc, tạo nên dấu ấn cá nhân không thể trộn lẫn. Bàn phím có hành trình phím 1.7mm cho cảm giác gõ cực tốt, loa Dolby Atmos mang lại âm thanh vòm 5.1.2 kênh sống động.`,
    category: 'Gaming'
  },
  {
    id: '5',
    name: 'Lenovo Legion 5 Pro',
    price: 35900000,
    image: './images/lenovolegion.jpg',
    cpu: 'Intel Core i7-12700H (14 cores, 20 threads)',
    ram: '16GB DDR5 4800MHz',
    ssd: '1TB M.2 PCIe Gen 4',
    description: `Lenovo Legion 5 Pro là một trong những chiếc laptop gaming được săn đón nhất nhờ sự cân bằng hoàn hảo giữa hiệu năng, màn hình và hệ thống tản nhiệt.

[HIỆU NĂNG "KHỦNG" VỚI TGP TỐI ĐA]
Sức mạnh từ Intel Core i7-12700H với 14 nhân xử lý kết hợp cùng RTX 3060 6GB (TGP lên đến 140W - mức cao nhất của dòng card này) giúp bạn chinh phục mọi tựa game nặng nhất hiện nay như Cyberpunk 2077 hay Elden Ring ở mức đồ họa cao nhất. RAM DDR5 mới nhất tăng tốc độ truy xuất dữ liệu đáng kể.

[MÀN HÌNH 16 INCH 2K 165HZ ĐỈNH CAO]
Màn hình 16 inch với tỷ lệ 16:10 cho không gian hiển thị rộng hơn. Độ phân giải WQXGA (2560x1600), tần số quét 165Hz, độ sáng 500 nits và đạt chuẩn HDR400. Hỗ trợ G-Sync và FreeSync giúp loại bỏ hoàn toàn hiện tượng xé hình. Đây là màn hình lý tưởng cho cả game thủ chuyên nghiệp và những người làm đồ họa kỹ thuật.

[TẢN NHIỆT LEGION COLDFRONT 4.0]
Hệ thống tản nhiệt Coldfront 4.0 với quạt kép mạnh mẽ, các ống dẫn nhiệt đồng lớn và hệ thống hút gió thông minh giúp duy trì mức xung nhịp cao của CPU và GPU trong thời gian dài mà không bị quá nhiệt (throttling). Chế độ Intelligent Mode tự động điều chỉnh quạt theo tác vụ.

[BÀN PHÍM TRUESTRIKE VÀ THIẾT KẾ]
Bàn phím Legion TrueStrike nổi tiếng với hành trình phím 1.5mm, độ nảy tốt và hỗ trợ 100% anti-ghosting. Đèn nền RGB 4 vùng cho phép bạn tùy chỉnh hiệu ứng ánh sáng. Vỏ máy bằng nhôm màu xám Storm Grey cực kỳ chắc chắn và chuyên nghiệp, không quá hầm hố nhưng vẫn toát lên vẻ mạnh mẽ.`,
    category: 'Gaming'
  },
  {
    id: '15',
    name: 'MSI Katana 15 B13V',
    price: 28900000,
    image: './images/MSIkatana.jpg',
    cpu: 'Intel Core i7-13620H (10 cores, 24MB Cache)',
    ram: '16GB DDR5 5200MHz',
    ssd: '512GB PCIe Gen 4',
    description: `MSI Katana 15 B13V mang trong mình sức mạnh của thanh kiếm Katana huyền thoại, sẵn sàng cùng bạn chinh phục mọi chiến trường ảo.

[SỨC MẠNH THẾ HỆ 13 VÀ RTX 40 SERIES]
Trang bị CPU Intel Core i7-13620H cực mạnh và card đồ họa NVIDIA GeForce RTX 4050 6GB. Với kiến trúc Ada Lovelace và công nghệ DLSS 3, máy mang lại tốc độ khung hình cực cao trong các tựa game mới nhất. MUX Switch cho phép xuất hình trực tiếp từ GPU rời để tối ưu hiệu năng.

[MÀN HÌNH 144HZ CHUYÊN GAME]
Màn hình 15.6 inch FHD với tần số quét 144Hz giúp bạn bắt kịp mọi chuyển động nhanh trong các tựa game bắn súng hay đua xe. Tấm nền IPS cho góc nhìn rộng và màu sắc trung thực.

[TẢN NHIỆT COOLER BOOST 5]
Hệ thống tản nhiệt Cooler Boost 5 độc quyền của MSI với 2 quạt và 6 ống dẫn nhiệt chung cho CPU và GPU, giúp tối ưu hóa khả năng thoát nhiệt. Thiết kế Shared-Pipe giúp cân bằng nhiệt độ giữa hai linh kiện quan trọng nhất.

[BÀN PHÍM RGB 4 VÙNG]
Bàn phím được thiết kế riêng cho game thủ với đèn nền RGB 4 vùng rực rỡ, các phím WASD được làm nổi bật. Hành trình phím 1.7mm mang lại cảm giác nhấn chắc chắn. Hệ thống âm thanh Hi-Res Audio cho trải nghiệm nghe nhạc và chơi game cực đỉnh.`,
    category: 'Gaming'
  },
  {
    id: '16',
    name: 'Razer Blade 16 (2023)',
    price: 85000000,
    image: './images/Razerblade.jpg',
    cpu: 'Intel Core i9-13950HX (24 cores, 36MB Cache)',
    ram: '32GB DDR5 5600MHz',
    ssd: '1TB PCIe Gen 4',
    description: `Razer Blade 16 là định nghĩa của một chiếc laptop gaming siêu cấp, kết hợp giữa sức mạnh khủng khiếp và thiết kế tinh xảo nhất thế giới.

[HIỆU NĂNG ĐỨNG ĐẦU THẾ GIỚI]
Sở hữu CPU Intel Core i9-13950HX với 24 nhân xử lý - mạnh ngang ngửa các dòng PC để bàn cao cấp nhất. Card đồ họa RTX 4080 12GB cho phép bạn chơi mọi game ở độ phân giải 4K mượt mà. RAM 32GB DDR5 tốc độ siêu cao giúp xử lý đa nhiệm không giới hạn.

[MÀN HÌNH DUAL-MODE MINI-LED ĐỘC QUYỀN]
Lần đầu tiên trên thế giới, một chiếc laptop có màn hình Mini-LED hỗ trợ hai chế độ: 4K 120Hz cho công việc sáng tạo và FHD+ 240Hz cho chơi game chuyên nghiệp. Độ sáng cực đỉnh 1000 nits và đạt chuẩn HDR1000 mang lại hình ảnh rực rỡ chưa từng có.

[THIẾT KẾ NHÔM NGUYÊN KHỐI]
Vỏ máy được cắt CNC từ một khối nhôm duy nhất, phủ lớp sơn đen mờ chống bám vân tay. Độ mỏng ấn tượng so với cấu hình bên trong. Hệ thống tản nhiệt buồng hơi lớn nhất từ trước đến nay của Razer đảm bảo máy hoạt động ổn định.

[TRẢI NGHIỆM XA XỈ]
Bàn phím Razer Chroma RGB từng phím, Touchpad bằng kính khổng lồ, hệ thống 4 loa với công nghệ THX Spatial Audio. Đây không chỉ là một chiếc laptop, mà là một tác phẩm nghệ thuật công nghệ.`,
    category: 'Gaming'
  },
  {
    id: '17',
    name: 'Alienware m16 R1',
    price: 52000000,
    image: './images/Alienware.jpg',
    cpu: 'Intel Core i7-13700HX (16 cores, 30MB Cache)',
    ram: '16GB DDR5 4800MHz',
    ssd: '1TB PCIe Gen 4',
    description: `Alienware m16 R1 mang ngôn ngữ thiết kế Legend 3.0 mới nhất, là biểu tượng của sức mạnh và phong cách đậm chất ngoài hành tinh.

[HIỆU NĂNG VƯỢT GIỚI HẠN]
Trang bị CPU dòng HX hiệu năng cao và card đồ họa RTX 4070 8GB. Alienware cho phép đẩy công suất tổng (TDP) lên mức cực cao để tận dụng tối đa sức mạnh phần cứng. Công nghệ Alienware Cryo-tech™ đảm bảo máy luôn mát mẻ trong những trận chiến kéo dài.

[MÀN HÌNH 240HZ SIÊU TỐC]
Màn hình 16 inch QHD+ với tần số quét 240Hz và thời gian phản hồi 3ms. Độ phủ màu 100% DCI-P3 cho hình ảnh không chỉ mượt mà mà còn cực kỳ sống động. Hỗ trợ ComfortView Plus giúp giảm ánh sáng xanh bảo vệ mắt game thủ.

[TẢN NHIỆT ĐỘC QUYỀN ELEMENT 31]
Sử dụng vật liệu tản nhiệt độc quyền Element 31 (Gallium-Silicone) trên cả CPU và GPU, giúp dẫn nhiệt hiệu quả hơn 25% so với keo thông thường. Hệ thống 4 quạt và 7 ống dẫn nhiệt đồng đảm bảo luồng khí lưu thông tối ưu.

[PHẦN MỀM ALIENWARE COMMAND CENTER]
Tùy chỉnh mọi thứ từ đèn nền AlienFX RGB, tốc độ quạt, ép xung đến các profile game riêng biệt thông qua phần mềm quản lý thông minh. Bàn phím cơ CherryMX tùy chọn mang lại cảm giác gõ phím cơ học đích thực trên laptop.`,
    category: 'Gaming'
  },

  // ---Lap HP ---
  {
    id: '4',
    name: 'HP Envy x360',
    price: 19500000,
    image: './images/hpenvy.jpg',
    cpu: 'Intel Core i7-1250U (10 cores, 12MB Cache)',
    ram: '16GB LPDDR4x 4266MHz',
    ssd: '512GB PCIe NVMe SSD',
    description: `HP Envy x360 là chiếc laptop xoay gập đa năng, kết hợp giữa sức mạnh của máy tính xách tay và sự tiện dụng của máy tính bảng.

[LINH HOẠT 360 ĐỘ VỚI THIẾT KẾ CAO CẤP]
Bản lề chắc chắn cho phép bạn xoay gập máy ở 4 chế độ khác nhau: Laptop để làm việc, Tablet để giải trí, Tent để xem phim và Stand để trình chiếu. Vỏ máy nhôm nguyên khối màu đen nhám cực kỳ sang trọng và chuyên nghiệp. Trọng lượng nhẹ giúp bạn dễ dàng cầm nắm ở chế độ máy tính bảng.

[MÀN HÌNH OLED RỰC RỠ VÀ CẢM ỨNG NHẠY]
Điểm giá trị nhất là màn hình cảm ứng OLED 13.3 inch. Công nghệ OLED mang lại độ tương phản vô hạn, màu đen tuyệt đối và màu sắc cực kỳ sống động. Hỗ trợ bút cảm ứng HP Rechargeable MPP2.0 Tilt Pen giúp bạn phác thảo ý tưởng hay ghi chú nhanh chóng ngay trên màn hình với độ trễ cực thấp.

[HIỆU NĂNG MẠNH MẼ CHO CÔNG VIỆC SÁNG TẠO]
Chip Intel Core i7 thế hệ 12 đảm bảo mọi tác vụ từ văn phòng đến đồ họa 2D, cắt ghép video ngắn đều diễn ra mượt mà. RAM 16GB cho khả năng đa nhiệm ấn tượng, mở hàng chục tab Chrome mà không lo giật lag. Ổ cứng SSD NVMe tốc độ cao giúp khởi động máy và ứng dụng chỉ trong vài giây.

[TIỆN ÍCH VÀ BẢO MẬT TỐI TÂN]
Camera 5MP tích hợp công nghệ AI giúp hình ảnh trong các cuộc gọi video luôn sắc nét và tự nhiên. Hệ thống loa Bang & Olufsen mang lại âm thanh chi tiết và sống động. Bảo mật vân tay một chạm và nút tắt camera vật lý bảo vệ quyền riêng tư tuyệt đối. Thời lượng pin dài hỗ trợ sạc nhanh 50% trong 30 phút.`,
    category: 'HP'
  },
  {
    id: '18',
    name: 'HP Spectre x360 14',
    price: 38900000,
    image: './images/hpspectre.jpg',
    cpu: 'Intel Core i7-1355U (10 cores, 12MB Cache)',
    ram: '16GB LPDDR5 5200MHz',
    ssd: '1TB PCIe Gen 4',
    description: `HP Spectre x360 14 là chiếc laptop 2-trong-1 sang trọng nhất thế giới, được ví như một món đồ trang sức công nghệ đỉnh cao.

[THIẾT KẾ GEM-CUT TINH XẢO]
Các góc cạnh được cắt vát kim cương tinh tế, nơi đặt cổng sạc và cổng Thunderbolt giúp dây cáp không bị vướng khi sử dụng. Vỏ nhôm CNC cao cấp với màu xanh Nocturne Blue hoặc đen Nightfall Black cực kỳ đẳng cấp.

[MÀN HÌNH 3K2K OLED TUYỆT ĐẸP]
Màn hình cảm ứng 13.5 inch với độ phân giải 3K2K (3000x2000) tỷ lệ 3:2 cho không gian làm việc theo chiều dọc rộng rãi. Tấm nền OLED HDR mang lại trải nghiệm xem phim và chỉnh sửa ảnh tuyệt vời nhất hiện nay.

[HIỆU NĂNG VÀ CHUẨN INTEL EVO]
Đạt chuẩn Intel Evo khắt khe, đảm bảo máy khởi động tức thì, thời lượng pin thực tế trên 10 giờ và hiệu năng mạnh mẽ với chip i7 thế hệ 13. RAM LPDDR5 tốc độ cao nhất giúp xử lý mọi tác vụ mượt mà.

[CAMERA 5MP THÔNG MINH]
Camera 5MP tích hợp tính năng tự động đóng khung (Auto Frame), lọc nhiễu bằng AI và điều chỉnh ánh sáng tự động. Hệ thống 4 loa Bang & Olufsen cho âm thanh mạnh mẽ, trong trẻo.`,
    category: 'HP'
  },
  {
    id: '19',
    name: 'HP Pavilion 15 eg2056TU',
    price: 16500000,
    image: './images/hppavilion.jpg',
    cpu: 'Intel Core i5-1240P (12 cores, 12MB Cache)',
    ram: '8GB DDR4 3200MHz',
    ssd: '512GB PCIe NVMe',
    description: `HP Pavilion 15 là mẫu laptop văn phòng "quốc dân" với thiết kế thời trang, màn hình lớn và hiệu năng ổn định trong tầm giá.

[THIẾT KẾ THỜI TRANG VÀ GỌN NHẸ]
Dù sở hữu màn hình 15.6 inch nhưng máy vẫn rất gọn nhẹ nhờ viền màn hình mỏng. Mặt C và nắp máy bằng kim loại mang lại cảm giác chắc chắn và sang trọng. Màu vàng Gold hoặc bạc Silver trẻ trung, phù hợp với mọi đối tượng.

[HIỆU NĂNG DÒNG P MẠNH MẼ]
Sử dụng chip Intel Core i5-1240P với 12 nhân xử lý - mạnh hơn hẳn dòng U thông thường. Máy xử lý tốt các tác vụ văn phòng nặng, học tập và giải trí đa phương tiện. Khả năng nâng cấp RAM linh hoạt giúp máy sử dụng lâu dài.

[MÀN HÌNH FULL HD IPS]
Màn hình 15.6 inch FHD với tấm nền IPS cho góc nhìn rộng và màu sắc tươi tắn. Công nghệ BrightView giúp hình ảnh trở nên bóng bẩy và bắt mắt hơn. Bàn phím đầy đủ phím số hỗ trợ tốt cho công việc kế toán, nhập liệu.

[ÂM THANH B&O ĐẶC TRƯNG]
Hệ thống loa kép được tinh chỉnh bởi Bang & Olufsen mang lại chất âm chi tiết, vượt trội hơn hẳn các đối thủ cùng tầm giá. Đầy đủ các cổng kết nối: USB-C, USB-A, HDMI và jack tai nghe.`,
    category: 'HP'
  },
  {
    id: '20',
    name: 'HP Victus 16',
    price: 24500000,
    image: './images/HPVictus.jpg',
    cpu: 'Intel Core i5-13500H (12 cores, 18MB Cache)',
    ram: '16GB DDR5 5200MHz',
    ssd: '512GB PCIe Gen 4',
    description: `HP Victus 16 mang ngôn ngữ thiết kế tối giản nhưng ẩn chứa sức mạnh gaming mạnh mẽ, phù hợp cho cả việc chơi game và làm việc chuyên nghiệp.

[THIẾT KẾ TỐI GIẢN, HIỆN ĐẠI]
Không quá hầm hố như các dòng gaming khác, Victus 16 sở hữu vẻ ngoài thanh lịch với logo V tinh tế. Máy có thể dễ dàng mang vào môi trường văn phòng hay lớp học mà không gây quá nhiều sự chú ý.

[HIỆU NĂNG GAMING THỰC THỤ]
Trang bị CPU Intel thế hệ 13 dòng H và card đồ họa RTX 4050 6GB. Công nghệ DLSS 3 giúp tăng khung hình đáng kể trong các tựa game nặng. Hệ thống tản nhiệt được cải tiến với các khe thoát nhiệt lớn ở mặt sau và hai bên.

[MÀN HÌNH 16.1 INCH 144HZ]
Kích thước màn hình 16.1 inch lớn hơn tiêu chuẩn, tần số quét 144Hz giúp trải nghiệm chơi game mượt mà. Độ phủ màu 100% sRGB trên một số phiên bản giúp máy đáp ứng tốt cả nhu cầu thiết kế đồ họa.

[PHẦN MỀM OMEN GAMING HUB]
Kiểm soát toàn bộ hiệu năng máy, tốc độ quạt và theo dõi thông số hệ thống thời gian thực. Bàn phím có đèn nền đơn sắc và cụm phím số đầy đủ, touchpad rộng rãi nhất trong phân khúc laptop gaming.`,
    category: 'HP'
  },
  {
    id: '21',
    name: 'HP EliteBook 840 G9',
    price: 27900000,
    image: './images/hpelite.jpg',
    cpu: 'Intel Core i5-1240U (10 cores, 12MB Cache)',
    ram: '16GB DDR5 4800MHz',
    ssd: '512GB PCIe NVMe',
    description: `HP EliteBook 840 G9 là dòng laptop doanh nghiệp cao cấp nhất của HP, tập trung vào bảo mật, độ bền và khả năng hội thoại trực tuyến.

[BẢO MẬT HP WOLF SECURITY]
Trang bị hệ thống bảo mật từ phần cứng đến phần mềm: HP Sure Start, Sure Run, Sure Click và màn hình chống nhìn trộm Sure View. Đây là pháo đài bảo vệ dữ liệu quan trọng của doanh nghiệp.

[TỐI ƯU CHO HỘI HỌP TRỰC TUYẾN]
Camera 5MP với tính năng HP Auto Frame luôn giữ bạn ở trung tâm khung hình. Hệ thống micro kép khử nhiễu bằng AI và loa Bang & Olufsen giúp âm thanh cuộc họp luôn rõ ràng như đang gặp mặt trực tiếp.

[THIẾT KẾ NHÔM NGUYÊN KHỐI]
Vỏ máy bằng nhôm màu bạc sang trọng, đạt độ bền chuẩn quân đội MIL-STD 810H. Trọng lượng chỉ 1.36kg và thời lượng pin cực dài giúp bạn yên tâm làm việc suốt cả ngày.

[BÀN PHÍM CHỐNG TRÀN]
Bàn phím có cảm giác gõ cực tốt, hỗ trợ đèn nền và đặc biệt là khả năng chống tràn nước, giúp bảo vệ linh kiện bên trong khỏi những tai nạn bất ngờ. Cổng kết nối đầy đủ với Thunderbolt 4 và HDMI.`,
    category: 'HP'
  },

  // ---Lap ACER ---
  {
    id: '6',
    name: 'Acer Swift 3 SF314',
    price: 15900000,
    image: './images/acerswi.jpg',
    cpu: 'AMD Ryzen 5 5500U (6 cores, 12 threads)',
    ram: '8GB LPDDR4X',
    ssd: '512GB PCIe NVMe SSD',
    description: `Acer Swift 3 SF314 là sự lựa chọn tối ưu cho người dùng văn phòng và sinh viên cần một chiếc máy bền bỉ, hiệu năng ổn định trong tầm giá.

[SIÊU NHẸ VÀ BỀN BỈ VỚI VẬT LIỆU CAO CẤP]
Với trọng lượng chỉ 1.19kg và độ mỏng 15.9mm, máy dễ dàng nằm gọn trong balo của bạn. Vỏ máy được hoàn thiện từ hợp kim Nhôm - Magie mang lại sự chắc chắn và vẻ ngoài hiện đại, chuyên nghiệp. Đây là một trong những chiếc laptop nhẹ nhất trong phân khúc giá rẻ.

[HIỆU NĂNG ỔN ĐỊNH VÀ MÁT MẺ]
Chip AMD Ryzen 5 5500U mang lại hiệu năng đa nhân mạnh mẽ, xử lý tốt các file Excel nặng, phần mềm kế toán hay các ứng dụng học tập trực tuyến. Card đồ họa tích hợp Radeon Graphics đủ sức để bạn giải trí với các tựa game online nhẹ nhàng như LOL, Valorant. Hệ thống tản nhiệt đơn giản nhưng hiệu quả giúp máy luôn duy trì nhiệt độ ổn định.

[MÀN HÌNH SẮC NÉT VÀ BẢO VỆ MẮT]
Màn hình 14 inch Full HD IPS với viền siêu mỏng mang lại tỷ lệ màn hình so với thân máy lên đến 82.73%. Công nghệ Acer Color Intelligence và ExaColor giúp tối ưu hóa màu sắc và độ sáng màn hình, mang lại hình ảnh sống động đồng thời giảm mỏi mắt khi làm việc lâu.

[KẾT NỐI HIỆN ĐẠI VÀ PIN BỀN]
Máy trang bị đầy đủ các cổng kết nối: USB Type-C hỗ trợ sạc nhanh và xuất hình ảnh, HDMI, USB 3.2. Cảm biến vân tay một chạm giúp đăng nhập Windows nhanh chóng và bảo mật. Thời lượng pin lên đến 12 giờ đáp ứng tốt một ngày làm việc dài mà không cần mang theo sạc.`,
    category: 'Acer'
  },
  {
    id: '22',
    name: 'Acer Nitro 5 Tiger',
    price: 21900000,
    image: './images/acernitro.jpg',
    cpu: 'Intel Core i5-12500H (12 cores, 18MB Cache)',
    ram: '16GB DDR4 3200MHz',
    ssd: '512GB PCIe Gen 4',
    description: `Acer Nitro 5 Tiger là "ông vua" laptop gaming phân khúc phổ thông với thiết kế hầm hố và hiệu năng cực kỳ mạnh mẽ.

[THIẾT KẾ ĐẬM CHẤT GAMING]
Phiên bản Tiger mang diện mạo mới với các đường nét thanh thoát hơn nhưng vẫn giữ được vẻ mạnh mẽ đặc trưng. Hệ thống đèn LED RGB 4 vùng trên bàn phím và dải đèn ở hốc tản nhiệt tạo nên không gian chơi game rực rỡ.

[HIỆU NĂNG VƯỢT TRỘI TRONG TẦM GIÁ]
CPU Intel Core i5-12500H dòng H hiệu năng cao kết hợp cùng RTX 3050. Máy cân tốt các tựa game Esport ở mức FPS cao và các tựa game AAA ở mức thiết lập trung bình - cao. Khả năng nâng cấp cực tốt với 2 khe RAM và 2 khe SSD.

[TẢN NHIỆT NITRO SENSE]
Hệ thống tản nhiệt 2 quạt với 4 cổng thoát nhiệt giúp máy luôn mát mẻ. Phần mềm Nitro Sense cho phép bạn kiểm soát tốc độ quạt và nhiệt độ hệ thống chỉ bằng một nút bấm chuyên dụng trên bàn phím.

[MÀN HÌNH 144HZ MƯỢT MÀ]
Màn hình 15.6 inch FHD 144Hz giúp loại bỏ hiện tượng bóng ma và xé hình, mang lại lợi thế lớn trong các trận chiến game tốc độ cao. Hệ thống âm thanh DTS: X Ultra cho âm thanh vòm 3D sống động.`,
    category: 'Acer'
  },
  {
    id: '23',
    name: 'Acer Predator Helios Neo 16',
    price: 34500000,
    image: './images/acerneo.jpg',
    cpu: 'Intel Core i7-13700HX (16 cores, 30MB Cache)',
    ram: '16GB DDR5 4800MHz',
    ssd: '512GB PCIe Gen 4',
    description: `Acer Predator Helios Neo 16 là dòng laptop gaming cận cao cấp, mang trong mình dòng máu của mãnh thú Predator với hiệu năng hủy diệt.

[SỨC MẠNH DÒNG HX CỰC ĐẠI]
Trang bị CPU Intel Core i7-13700HX - dòng chip mạnh nhất dành cho laptop, kết hợp cùng RTX 4060 8GB. Máy dễ dàng xử lý mọi tựa game nặng nhất và các tác vụ đồ họa chuyên nghiệp, render 3D hay biên tập video 4K.

[MÀN HÌNH 165HZ CHUẨN MÀU]
Màn hình 16 inch độ phân giải WQXGA (2560x1600) tỷ lệ 16:10. Tần số quét 165Hz, độ sáng 500 nits và độ phủ màu 100% sRGB. Đây là màn hình hoàn hảo cho cả chơi game và làm việc chuyên môn cần độ chính xác màu sắc cao.

[TẢN NHIỆT AEROBLADE 3D THẾ HỆ 5]
Công nghệ quạt kim loại AeroBlade 3D độc quyền giúp tăng luồng gió lên 55% so với quạt thông thường. Keo tản nhiệt kim loại lỏng giúp tối ưu hóa khả năng dẫn nhiệt từ CPU ra hệ thống ống đồng.

[THIẾT KẾ MẬT MÃ ĐỘC ĐÁO]
Mặt lưng máy có các dãy số mật mã bí ẩn, tạo nên vẻ ngoài độc đáo và đậm chất công nghệ. Bàn phím RGB 4 vùng, hệ thống loa DTS: X Ultra và đầy đủ các cổng kết nối tốc độ cao nhất hiện nay.`,
    category: 'Acer'
  },
  {
    id: '24',
    name: 'Acer Aspire 5 A515',
    price: 13500000,
    image: './images/aceras.jpg',
    cpu: 'Intel Core i5-1235U (10 cores, 12MB Cache)',
    ram: '8GB DDR4 3200MHz',
    ssd: '512GB PCIe NVMe',
    description: `Acer Aspire 5 là mẫu laptop văn phòng bền bỉ, thực dụng với màn hình lớn và đầy đủ các cổng kết nối cho nhu cầu công việc hàng ngày.

[THIẾT KẾ CHẮC CHẮN]
Nắp máy bằng nhôm sang trọng và chắc chắn. Bản lề nâng giúp tối ưu hóa góc gõ phím và hỗ trợ tản nhiệt. Máy có thiết kế thanh lịch, phù hợp với môi trường công sở và giảng đường.

[HIỆU NĂNG ỔN ĐỊNH]
Chip Intel Core i5 thế hệ 12 đáp ứng tốt các nhu cầu văn phòng, duyệt web, xem phim và chỉnh sửa ảnh cơ bản. Ổ cứng SSD 512GB cho không gian lưu trữ rộng rãi và tốc độ khởi động nhanh chóng.

[MÀN HÌNH FULL HD IPS]
Màn hình 15.6 inch FHD với tấm nền IPS cho hình ảnh rõ nét, màu sắc ổn định ở nhiều góc nhìn. Công nghệ Acer BlueLightShield giúp lọc ánh sáng xanh, bảo vệ thị lực khi sử dụng trong thời gian dài.

[KẾT NỐI KHÔNG GIỚI HẠN]
Trang bị đầy đủ các cổng kết nối: USB-C, USB 3.2, HDMI và đặc biệt là cổng mạng LAN RJ45 giúp kết nối internet luôn ổn định. Wi-Fi 6 mới nhất cho tốc độ kết nối không dây nhanh và ổn định hơn.`,
    category: 'Acer'
  },
  {
    id: '25',
    name: 'Acer Spin 5 SP514',
    price: 26900000,
    image: './images/acer.jpg',
    cpu: 'Intel Core i7-1260P (12 cores, 18MB Cache)',
    ram: '16GB LPDDR5 4800MHz',
    ssd: '512GB PCIe NVMe',
    description: `Acer Spin 5 là chiếc laptop xoay gập 360 độ cao cấp, mỏng nhẹ và cực kỳ linh hoạt cho những người làm công việc sáng tạo.

[XOAY GẬP 360 ĐỘ LINH HOẠT]
Thiết kế bản lề đặc biệt cho phép bạn sử dụng máy ở nhiều tư thế: Laptop, Tablet, Tent hay Stand. Vỏ máy bằng nhôm nguyên khối siêu nhẹ, chỉ nặng 1.3kg, cực kỳ thuận tiện để mang theo và sử dụng như một cuốn sổ tay thông minh.

[MÀN HÌNH 2K TỶ LỆ 16:10]
Màn hình cảm ứng 14 inch độ phân giải 2K (2560x1600) cực kỳ sắc nét. Tỷ lệ 16:10 mang lại không gian làm việc rộng hơn. Đi kèm máy là bút cảm ứng Acer Active Stylus tích hợp công nghệ Wacom AES 2.0 với 4096 mức độ cảm ứng lực.

[HIỆU NĂNG MẠNH MẼ CHUẨN INTEL EVO]
Trang bị CPU Intel Core i7 dòng P hiệu năng cao và đạt chuẩn Intel Evo. Máy xử lý mượt mà các phần mềm đồ họa, thiết kế và đa nhiệm nặng. RAM LPDDR5 và SSD NVMe Gen 4 cho tốc độ xử lý dữ liệu cực nhanh.

[TẢN NHIỆT VÀ PIN]
Hệ thống tản nhiệt TwinAir với quạt kép giúp máy luôn mát mẻ dù có thiết kế mỏng. Thời lượng pin lên đến 15 giờ và hỗ trợ sạc nhanh, chỉ cần 30 phút sạc cho 4 giờ sử dụng.`,
    category: 'Acer'
  }
];

// du lieu
const storedProducts = localStorage.getItem('db_products');

if (!storedProducts || JSON.parse(storedProducts).length < 25) {
  localStorage.setItem('db_products', JSON.stringify(products));
}
