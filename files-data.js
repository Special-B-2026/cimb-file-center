const FILES = [

/* =========================
   หมวด: สินเชื่อ
========================= */

{
id:1,
fileName:"Loan_Request.pdf",
title:"ใบคำขอสินเชื่อบ้าน",
type:"pdf",
category:"สินเชื่อ"
},

{
id:2,
fileName:"Personal_Loan_Request.pdf",
title:"ใบคำขอสินเชื่อบุคคล",
type:"pdf",
category:"สินเชื่อ"
},

{
id:3,
fileName:"Customer_Data_Change_Request.pdf",
title:"ใบคำขอเปลี่ยนแปลงข้อมูลลูกค้า",
type:"pdf",
category:"สินเชื่อ"
},

{
id:4,
fileName:"Sales_Script_Loan.pdf",
title:"SaleScript HL",
type:"pdf",
category:"สินเชื่อ"
},

{
id:5,
fileName:"Sales_Script_PCN.pdf",
title:"SaleScript PCN",
type:"pdf",
category:"สินเชื่อ"
},

{
id:6,
fileName:"AWAYA_Sales_Script_SecuredLoan.pdf",
title:"สินเชื่อมีหลักประกัน โทรAWAYA",
type:"pdf",
category:"สินเชื่อ"
},

{
id:7,
fileName:"AWAYA_Sales_Script_UnSecuredLoan.pdf",
title:"สินเชื่อไม่มีหลักประกัน โทรAWAYA",
type:"pdf",
category:"สินเชื่อ"
},

{
id:8,
fileName:"Sales_Sheet_HL.pdf",
title:"Sales Sheet สินเชื่อบ้าน",
type:"pdf",
category:"สินเชื่อ"
},

{
id:9,
fileName:"Sales_Sheet_MP.pdf",
title:"Sales Sheet สินเชื่ออเนกประสงค์",
type:"pdf",
category:"สินเชื่อ"
},

{
id:10,
fileName:"Sales_Sheet_PY.pdf",
title:"Sales Sheet PY",
type:"pdf",
category:"สินเชื่อ"
},


/* =========================
   หมวด: ประกัน
========================= */

{
id:11,
fileName:"Saleoffer_Pa.pdf",
title:"เอกสารเสนอขายประกัน PA",
type:"pdf",
category:"ประกัน"
},

{
id:12,
fileName:"Saleoffer_Health.pdf",
title:"เอกสารเสนอขายประกันสุขภาพ",
type:"pdf",
category:"ประกัน"
},

{
id:13,
fileName:"Saleoffer_Cancer.pdf",
title:"เอกสารเสนอขายประกันมะเร็ง",
type:"pdf",
category:"ประกัน"
},

{
id:14,
fileName:"Saleoffer_Homecare.pdf",
title:"เอกสารเสนอขาย Homecare",
type:"pdf",
category:"ประกัน"
},

{
id:15,
fileName:"Saleoffer_Motor.pdf",
title:"เอกสารเสนอขายประกันรถยนต์",
type:"pdf",
category:"ประกัน"
},

{
id:16,
fileName:"Brochure_PA.pdf",
title:"โบรชัวร์ประกัน PA",
type:"pdf",
category:"ประกัน"
},

{
id:17,
fileName:"Brochure_Cancer.pdf",
title:"โบรชัวร์ประกันมะเร็ง",
type:"pdf",
category:"ประกัน"
},

{
id:18,
fileName:"Brochure_Homecare.pdf",
title:"โบรชัวร์ Homecare",
type:"pdf",
category:"ประกัน"
},

{
id:19,
fileName:"Brochure_Moter1.pdf",
title:"โบรชัวร์ประกันรถยนต์ 1",
type:"pdf",
category:"ประกัน"
},

{
id:20,
fileName:"Brochure_Moter23.pdf",
title:"โบรชัวร์ประกันรถยนต์ 2 และ 3",
type:"pdf",
category:"ประกัน"
},


/* =========================
   หมวด: ตารางและเอกสาร
========================= */

{
id:21,
fileName:"Interest_Rate.pdf",
title:"ตารางอัตราดอกเบี้ย",
type:"pdf",
category:"เอกสารทั่วไป"
},

{
id:22,
fileName:"Commission.pdf",
title:"ตารางค่าคอมมิชชั่น",
type:"pdf",
category:"เอกสารทั่วไป"
},


/* =========================
   หมวด: โปรแกรม Excel
========================= */

{
id:23,
fileName:"Income_Calculation.xlsx",
title:"โปรแกรมคำนวณรายได้",
type:"excel",
category:"โปรแกรมคำนวณ"
},

{
id:24,
fileName:"Income_Summary.xlsx",
title:"สรุปรายได้",
type:"excel",
category:"โปรแกรมคำนวณ"
},

{
id:25,
fileName:"Cal_Personal.xls",
title:"โปรแกรมคำนวณรายได้บุคคล",
type:"excel",
category:"โปรแกรมคำนวณ"
},

{
id:26,
fileName:"Interest_Reduction.xlsx",
title:"ตารางลดดอกเบี้ย",
type:"excel",
category:"โปรแกรมคำนวณ"
},

{
id:27,
fileName:"MRTA_Calculation.xlsx",
title:"โปรแกรมคำนวณ MRTA",
type:"excel",
category:"โปรแกรมคำนวณ"
},

{
id:28,
fileName:"MRTA_Extra.xlsx",
title:"โปรแกรมคำนวณ MRTA Extra",
type:"excel",
category:"โปรแกรมคำนวณ"
},

{
id:29,
fileName:"MLTA_Calculation.xlsx",
title:"โปรแกรมคำนวณ MLTA",
type:"excel",
category:"โปรแกรมคำนวณ"
},

{
id:30,
fileName:"MLTA_Extra.xlsx",
title:"โปรแกรมคำนวณ MLTA Extra",
type:"excel",
category:"โปรแกรมคำนวณ"
},

{
id:31,
fileName:"SiteVisit.xlsx",
title:"แบบฟอร์ม Site Visit",
type:"excel",
category:"โปรแกรมคำนวณ"
},

{
id:32,
fileName:"Fire_Calculation.xlsx",
title:"โปรแกรมคำนวณประกันอัคคีภัย",
type:"excel",
category:"โปรแกรมคำนวณ"
},

{
id:33,
fileName:"Fire_Saleoffer.xlsx",
title:"เอกสารเสนอขายประกันอัคคีภัย",
type:"excel",
category:"ประกัน"
}

];