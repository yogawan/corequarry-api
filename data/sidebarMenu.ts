import {
  Home,
  Users,
  ShoppingCart,
  Truck,
  Box,
  Settings,
  DollarSign,
  Cpu,
  Shield,
  Globe,
  FileText,
  Image,
  Edit,
  Layers,
  Clock,
  TrendingUp,
  GraduationCap,
  Wallet,
  CalendarDays,
  UserCheck,
  Receipt,
  Filter,
  MessageSquare,
  Tag,
  Bell,
  BarChart3,
  FileSpreadsheet,
  CreditCard,
  Target,
  PiggyBank,
  Coins,
  Wrench,
  ClipboardCheck,
  Package,
  QrCode,
  History,
  Factory,
  CheckCircle,
  // Tool,
  Users2,
  Hash,
  Trash2,
  BookOpen,
  LayoutDashboard,
  FileCheck,
  AlertTriangle,
  Menu,
  Search,
  Send,
  Palette,
} from "lucide-react";

export interface SidebarItem {
  title: string;
  path?: string;
  icon: React.ComponentType<any>;
  subMenu?: SidebarItem[];
}

export const sidebarMenu: SidebarItem[] = [
  {
    title: "Dashboard",
    icon: Home,
    subMenu: [
      { title: "Overview", path: "/dashboard", icon: LayoutDashboard },
      { title: "Analytics", path: "/dashboard/analytics", icon: BarChart3 },
      { title: "Sales Performance", path: "/dashboard/sales", icon: TrendingUp },
      { title: "Inventory Status", path: "/dashboard/inventory", icon: Package },
      { title: "Finance Summary", path: "/dashboard/finance", icon: DollarSign },
      { title: "Production Metrics", path: "/dashboard/production", icon: Factory },
      { title: "HR Overview", path: "/dashboard/hr", icon: Users },
      { title: "Real-time Monitoring", path: "/dashboard/realtime", icon: Clock },
    ],
  },
  {
    title: "User & Karyawan",
    icon: Users,
    subMenu: [
      { title: "Manajemen User", path: "/user", icon: UserCheck },
      { title: "Manajemen Karyawan", path: "/karyawan", icon: Users },
      { title: "Absensi & Shift", path: "/karyawan/absensi", icon: Clock },
      { title: "Performance & KPI", path: "/karyawan/kpi", icon: TrendingUp },
      {
        title: "Training & Certification",
        path: "/karyawan/training",
        icon: GraduationCap,
      },
      {
        title: "Payroll & Slip Gaji",
        path: "/karyawan/payroll",
        icon: Wallet,
      },
      { title: "Leave Management", path: "/karyawan/leave", icon: CalendarDays },
    ],
  },
  {
    title: "Customer & Sales",
    icon: ShoppingCart,
    subMenu: [
      { title: "Manajemen Customer", path: "/customer", icon: Users },
      { title: "Pencatatan Penjualan", path: "/penjualan", icon: Receipt },
      { title: "Order & Quotation", path: "/sales/order", icon: FileText },
      { title: "CRM & Customer Interaction", path: "/sales/crm", icon: MessageSquare },
      {
        title: "Dynamic Pricing & Discounts",
        path: "/sales/discount",
        icon: Tag,
      },
      {
        title: "Invoice & Payment Reminder",
        path: "/sales/invoice",
        icon: Bell,
      },
      {
        title: "Sales Pipeline / Funnel",
        path: "/sales/funnel",
        icon: Filter,
      },
    ],
  },
  {
    title: "Supplier & Procurement",
    icon: Truck,
    subMenu: [
      { title: "Manajemen Supplier", path: "/supplier", icon: Truck },
      { title: "Pencatatan Pembelian", path: "/pembelian", icon: ShoppingCart },
      {
        title: "Purchase Request & Approval",
        path: "/procurement/request",
        icon: FileCheck,
      },
      {
        title: "Vendor Rating & Performance",
        path: "/procurement/vendor-rating",
        icon: BarChart3,
      },
      {
        title: "Contract & Term Management",
        path: "/procurement/contract",
        icon: FileText,
      },
    ],
  },
  {
    title: "Produk & Inventory",
    icon: Box,
    subMenu: [
      { title: "Manajemen Produk", path: "/produk", icon: Package },
      { title: "Manajemen Inventory", path: "/inventory", icon: Box },
      {
        title: "Multi-Warehouse Management",
        path: "/inventory/warehouse",
        icon: Home,
      },
      { title: "Barcode / QR Scanner", path: "/inventory/scanner", icon: QrCode },
      {
        title: "Inventory Forecasting",
        path: "/inventory/forecast",
        icon: TrendingUp,
      },
      {
        title: "Inventory Movement History",
        path: "/inventory/history",
        icon: History,
      },
    ],
  },
  {
    title: "Produksi & Operasional",
    icon: Factory,
    subMenu: [
      { title: "Manajemen Produksi", path: "/produksi", icon: Factory },
      { title: "Quality Control", path: "/produksi/qc", icon: CheckCircle },
      {
        title: "Maintenance Mesin & Peralatan",
        path: "/produksi/maintenance",
        icon: Wrench,
      },
      {
        title: "Manajemen Shift & Operator",
        path: "/produksi/shift",
        icon: Users2,
      },
      {
        title: "Tracking Batch & Serial Number",
        path: "/produksi/batch",
        icon: Hash,
      },
      {
        title: "Waste & Scrap Management",
        path: "/produksi/waste",
        icon: Trash2,
      },
      { title: "SOP & Safety", path: "/produksi/sop", icon: BookOpen },
    ],
  },
  {
    title: "Finance & Accounting",
    icon: DollarSign,
    subMenu: [
      { title: "Dashboard Finance", path: "/finance", icon: LayoutDashboard },
      { title: "Laporan & Export", path: "/finance/laporan", icon: FileSpreadsheet },
      {
        title: "Accounts Receivable / Payable",
        path: "/finance/ar-ap",
        icon: CreditCard,
      },
      {
        title: "Budgeting & Cost Control",
        path: "/finance/budget",
        icon: PiggyBank,
      },
      {
        title: "Expense Tracking & Approval",
        path: "/finance/expense",
        icon: Receipt,
      },
      {
        title: "Multi-Currency / Multi-Account",
        path: "/finance/currency",
        icon: Coins,
      },
    ],
  },
  {
    title: "AI / LLM & RAG",
    icon: Cpu,
    subMenu: [
      { title: "Query & Insight", path: "/ai/query", icon: Search },
      { title: "Prediksi & Rekomendasi", path: "/ai/prediksi", icon: Target },
      { title: "Automated Report Generation", path: "/ai/reports", icon: FileText },
      {
        title: "Decision Support / Recommendations",
        path: "/ai/decision",
        icon: ClipboardCheck,
      },
    ],
  },
  {
    title: "Compliance & Safety",
    icon: Shield,
    subMenu: [
      { title: "Document Management", path: "/compliance/docs", icon: FileText },
      { title: "Audit Trail", path: "/compliance/audit", icon: History },
      {
        title: "Safety & Incident Reporting",
        path: "/compliance/safety",
        icon: AlertTriangle,
      },
    ],
  },
  {
    title: "CMS Website",
    icon: Globe,
    subMenu: [
      { title: "Pages", path: "/cms/pages", icon: FileText },
      { title: "Blog", path: "/cms/blog", icon: Edit },
      { title: "Media Library", path: "/cms/media", icon: Image },
      { title: "Navigation & Menus", path: "/cms/menus", icon: Menu },
      { title: "SEO & Meta", path: "/cms/seo", icon: Search },
      { title: "Forms & Submissions", path: "/cms/forms", icon: Send },
      { title: "Themes & Templates", path: "/cms/themes", icon: Palette },
    ],
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];
