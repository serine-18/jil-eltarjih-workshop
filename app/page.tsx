"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"
import { Calendar, MapPin, Users, Target, Lightbulb, BookOpen, Camera, Megaphone, Eye, Star } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function WorkshopPlatform() {
  const [isVisible, setIsVisible] = useState(false)
  const controls = useAnimation()
   {/*const [phone, setPhone] = useState("")
  const [confirmed, setConfirmed] = useState(false)

  const handleConfirm = async () => {
    const res = await fetch("/api/mark-attendance", {
      method: "POST",
      body: JSON.stringify({ phoneNumber: phone }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setConfirmed(data.success);
  }*/}
  useEffect(() => {
    setIsVisible(true)
    controls.start({
      rotate: [0, 360],
      transition: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
    })
  }, [controls])

  const goals = [
    "تأهيل مسؤولي التسويق على مستوى الأفواج عبر ورشات تكوينية ترفع من كفاءتهم في إدارة الصفحات وتغطية أنشطة افواجهم باحترافية عالية",
    "توحيد هوية الظهور الإلكتروني للأكاديمية على مختلف منصات التواصل، لضمان احترافية وجاذبية أكبر في التواصل مع الجمهور",
    "تعزيز التفاعل المنظم مع القضية الفلسطينية، من خلال زيادة المنشورات الرقمية وجعلها موحدة وفاعلة",
    "وضع مسؤولي التسويق في تماس مباشر مع القيادة الوطنية لقسم التسويق، لضمان تنفيذ خطة التسويق الوطني بفعالية في الميدان الرقمي",
    "خلق فضاء مميز للتعارف وتبادل الأفكار والخبرات",
  ]

  const workshops = [
    { title: "ورشة أساسيات التصميم", icon: <Camera className="w-5 h-5" />, color: "from-orange-400 to-orange-500" },
    {
      title: "ورشة إدارة تغطية نشاطات الفوج",
      icon: <Megaphone className="w-5 h-5" />,
      color: "from-amber-400 to-amber-500",
    },
    {
      title: "ورشة شرح دليل مسؤول التسويق",
      icon: <BookOpen className="w-5 h-5" />,
      color: "from-yellow-600 to-orange-600",
    },
    { title: "ورشة أساسيات التسويق", icon: <Lightbulb className="w-5 h-5" />, color: "from-orange-500 to-amber-600" },
  ]

  const scheduleData = [
    {
      day: "اليوم الأول (الخميس)",
      date: "7 أوت 2025",
      activities: [
        {
          time: "14:00 - 16:00",
          activity: "الاستقبال وتسجيل المشاركين",
          executor: "اللجنة التنظيمية",
          notes: "وقت حر للتعارف والاستعداد",
        },
        {
          time: "16:00 - 18:00",
          activity: "استراحة وتحضيرات",
          executor: "المشاركون",
          notes: "",
        },
        {
          time: "18:00 - 19:30",
          activity: "حفل الافتتاح الرسمي",
          executor: "إدارة الملتقى",
          notes: "كلمات ترحيبية وتعريف بالبرنامج",
        },
        {
          time: "19:30 - 20:00",
          activity: "صلاة المغرب",
          executor: "جماعي",
          notes: "30 دقيقة",
        },
        {
          time: "20:00 - 21:00",
          activity: "وجبة العشاء",
          executor: "اللجنة التنظيمية",
          notes: "عشاء جماعي",
        },
        {
          time: "21:00 - 22:30",
          activity: 'محاضرة تزكوية: "بين الإعلام والمقاومة"',
          executor: "الأستاذ مروان بن قطاية",
          notes: "محاضرة تأسيسية مدتها 90 دقيقة",
        },
        {
          time: "22:30 - 23:45",
          activity: "شرح دليل عمل مسؤولي الإعلام",
          executor: "إدارة الإعلام",
          notes: "توزيع وشرح الأدلة التطبيقية",
        },
        {
          time: "00:00",
          activity: "نوم وإطفاء الأنوار",
          executor: "جميع المشاركين",
          notes: "انتهاء فعاليات اليوم الأول",
        },
      ],
    },
    {
      day: "اليوم الثاني (الجمعة)",
      date: "8 أوت 2025",
      activities: [
        {
          time: "05:30 - 06:00",
          activity: "الاستيقاظ لصلاة الصبح",
          executor: "جماعي",
          notes: "في الوقت المحدد",
        },
        {
          time: "06:00 - 07:15",
          activity: "وقت حر وتحضيرات صباحية",
          executor: "المشاركون",
          notes: "استعداد شخصي",
        },
        {
          time: "07:15 - 08:00",
          activity: "وجبة الفطور",
          executor: "اللجنة التنظيمية",
          notes: "45 دقيقة",
        },
        {
          time: "08:00 - 11:00",
          activity: 'الورشة الأولى: "مبادئ التصميم"',
          executor: "الأستاذ عمار أولاي",
          notes: "ورشة تطبيقية 3 ساعات مع استراحة",
        },
        {
          time: "11:00 - 12:30",
          activity: "استراحة وتحضيرات لصلاة الجمعة",
          executor: "المشاركون",
          notes: "استراحة ممتدة",
        },
        {
          time: "12:30 - 14:00",
          activity: "صلاة الجمعة ووجبة الغداء",
          executor: "جماعي / اللجنة التنظيمية",
          notes: "صلاة جماعية + غداء",
        },
        {
          time: "14:00 - 16:30",
          activity: 'الورشة الثانية: "إدارة التغطية الإعلامية لفعاليات الأكاديمية"',
          executor: "الأستاذة منعم مقري",
          notes: "ورشة تطبيقية مدتها ساعتان ونصف",
        },
        {
          time: "16:30 - 17:00",
          activity: "صلاة العصر وعصرونية",
          executor: "جماعي / اللجنة التنظيمية",
          notes: "استراحة مع مشروبات خفيفة",
        },
        {
          time: "17:00 - 20:00",
          activity: 'الورشة الثالثة: "التسويق وإدارة الصفحات"',
          executor: "الأستاذة منيرة لهواسة والأستاذة خديجة سلطاني",
          notes: "ورشة مشتركة لمدة ساعتين",
        },
        {
          time: "20:00 - 22:00",
          activity: "جلسة مع إدارة قسم التسويق الوطني",
          executor: "إدارة التسويق الوطني",
          notes: "جلسة تفاعلية بعد صلاة المغرب والعشاء",
        },
      ],
    },
    {
      day: "اليوم الثالث والأخير (السبت)",
      date: "9 أوت 2025",
      activities: [
        {
          time: "05:30 - 06:00",
          activity: "الاستيقاظ لصلاة الصبح",
          executor: "جماعي",
          notes: "في الوقت المحدد",
        },
        {
          time: "06:00 - 07:30",
          activity: "وقت حر وتحضيرات نهائية",
          executor: "المشاركون",
          notes: "تجهيز الحقائب والاستعداد للمغادرة",
        },
        {
          time: "07:30 - 08:30",
          activity: "وجبة الفطور الأخيرة",
          executor: "اللجنة التنظيمية",
          notes: "فطور وداع",
        },
        {
          time: "09:30 - 12:00",
          activity: "حفل الختام والتوصيات النهائية",
          executor: "إدارة الملتقى",
          notes: "تقييم البرنامج وتوزيع الشهادات والمغادرة",
        },
      ],
    },
  ]
  const KeffiyehPattern = () => (
    <div className="absolute inset-0 opacity-4">
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <pattern id="keffiyeh" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <rect width="60" height="60" fill="none" />
            <path d="M0,30 L30,0 L60,30 L30,60 Z" fill="currentColor" opacity="0.18" />
            <circle cx="30" cy="30" r="4" fill="currentColor" opacity="0.1" />
            <path d="M15,15 L45,15 M15,45 L45,45" stroke="currentColor" strokeWidth="1" opacity="0.08" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#keffiyeh)" className="text-amber-800" />
      </svg>
    </div>
  )
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-orange-200 via-amber-100 via-stone-50 to-orange-100 relative overflow-hidden"
      dir="rtl"
    >
            {/* Professional Keffiyeh Pattern Background */}
            <KeffiyehPattern />
      {/* Removed all background patterns and animations */}
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header with Logo */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -100 }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: isVisible ? 1 : 0, rotate: isVisible ? 0 : -180 }}
            transition={{ duration: 1.5, delay: 0.3, type: "spring", bounce: 0.5 }}
            className="mb-6"
          >
            <div className="relative inline-block">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 30px rgba(251, 146, 60, 0.3)",
                    "0 0 50px rgba(251, 146, 60, 0.5)",
                    "0 0 30px rgba(251, 146, 60, 0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="rounded-full p-3 bg-white/60 backdrop-blur-sm border border-orange-200"
              >
                <Image
                  src="/logo.png"
                  alt="Jil Eltarjih Academy Logo"
                  width={140}
                  height={140}
                  className="rounded-full"
                />
              </motion.div>

              {/* Subtle Orbiting Elements */}
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <div className="relative w-full h-full">
                  <Eye className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-7 h-7 text-orange-500" />
                  <Camera className="absolute top-1/2 -right-3 transform -translate-y-1/2 w-7 h-7 text-amber-600" />
                  <Star className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-7 h-7 text-orange-400 fill-current" />
                  <Lightbulb className="absolute top-1/2 -left-3 transform -translate-y-1/2 w-7 h-7 text-amber-500" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Conference Title "رؤية" with Professional Styling */}
        <motion.div
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.3 }}
          transition={{ duration: 1.5, delay: 0.8, type: "spring", bounce: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="relative"
          >
            {/* Main Conference Title */}
            <div className="relative mb-8">
              <motion.h1
                className="text-8xl mb-2 md:text-9xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-800 drop-shadow-2xl"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                رؤية
              </motion.h1>

              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="text-2xl md:text-3xl font-bold text-amber-800 mb-4"
              >
                ملتقى مسؤولي التسويق الوطني
              </motion.div>
            </div>

            {/* Animated Divider */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: isVisible ? "60%" : 0 }}
              transition={{ duration: 2, delay: 2 }}
              className="h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto mb-8"
            />

            {/* Slogan */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 1, delay: 2.5 }}
              className="relative"
            >
              <div className="inline-block bg-gradient-to-r from-orange-50 to-amber-50 backdrop-blur-md border-2 border-orange-200 rounded-2xl px-10 py-6 shadow-xl">
                <p className="text-2xl md:text-3xl font-bold text-orange-800 tracking-wide">نقاوم بعدسة الوعي</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Event Info Cards with Professional Animation */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Calendar, title: "التاريخ", content: "7، 8، 9 أوت 2025", badge: "ثلاثة أيام", delay: 0.2 },
            { icon: MapPin, title: "المكان", content: "الجزائر العاصمة", badge: "المقر الوطني للأكاديمية", delay: 0.4 },
            {
              icon: Users,
              title: "الفئة المستهدفة",
              content: "مسؤولو التسويق والإعلام",
              badge: "الدفعة الخامسة",
              delay: 0.6,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80, rotateX: -45 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 80, rotateX: isVisible ? 0 : -45 }}
              transition={{ duration: 1, delay: 3 + item.delay, type: "spring", bounce: 0.3 }}
              whileHover={{
                scale: 1.03,
                rotateY: 3,
                boxShadow: "0 25px 50px rgba(251, 146, 60, 0.2)",
              }}
              className="perspective-1000"
            >
              <Card className="bg-white/80 backdrop-blur-lg border-orange-200 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-amber-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="text-center relative z-10 pb-4">
                  <motion.div whileHover={{ rotate: 360, scale: 1.15 }} transition={{ duration: 0.8 }} className="mb-4">
                    <item.icon className="w-12 h-12 text-orange-500 mx-auto" />
                  </motion.div>
                  <CardTitle className="text-orange-800 text-xl font-bold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center relative z-10">
                  <p className="text-lg font-semibold text-gray-700 mb-4 leading-relaxed">{item.content}</p>
                  <Badge
                    variant="secondary"
                    className="bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 border-orange-200 px-4 py-2 text-sm font-medium"
                  >
                    {item.badge}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Goals Section with Professional Enhancement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
          transition={{ duration: 1.2, delay: 4, type: "spring", bounce: 0.2 }}
          className="mb-16"
        >
          <Card className="bg-white/90 backdrop-blur-xl border-orange-200 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-25 via-amber-25 to-stone-25" />
            <CardHeader className="text-center relative z-10 pb-8">
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Target className="w-14 h-14 text-orange-500 mx-auto mb-6" />
              </motion.div>
              <CardTitle className="text-4xl text-orange-800 mb-4 font-bold">أهداف الملتقى</CardTitle>
              <CardDescription className="text-orange-600 text-xl leading-relaxed max-w-2xl mx-auto">
                الأهداف الرئيسية التي نسعى لتحقيقها من خلال هذا الملتقى التدريبي المتخصص
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="space-y-8">
                {goals.map((goal, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -80, rotateY: -45 }}
                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -80, rotateY: isVisible ? 0 : -45 }}
                    transition={{ duration: 1, delay: 4.5 + index * 0.3, type: "spring", bounce: 0.3 }}
                    whileHover={{
                      scale: 1.01,
                      x: 8,
                      boxShadow: "0 15px 40px rgba(251, 146, 60, 0.15)",
                    }}
                    className="group cursor-pointer"
                  >
                    <div className="flex items-start gap-6 p-8 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl border-r-4 border-orange-400 hover:border-amber-500 transition-all duration-400 shadow-lg hover:shadow-xl">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.8 }}
                        className={`w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full flex items-center justify-center text-lg font-bold mt-1 shadow-lg flex-shrink-0`}
                      >
                        {index + 1}
                      </motion.div>
                      <p className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-800 transition-colors duration-300">
                        {goal}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Workshops Section with Professional Styling */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 }}
          transition={{ duration: 1.2, delay: 6, type: "spring", bounce: 0.2 }}
          className="mb-16"
        >
          <Card className="bg-white/90 backdrop-blur-xl border-orange-200 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-25 via-orange-25 to-stone-25" />
            <CardHeader className="text-center relative z-10 pb-8">
              <motion.div
                animate={{
                  rotateY: [0, 15, -15, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <BookOpen className="w-14 h-14 text-orange-500 mx-auto mb-6" />
              </motion.div>
              <CardTitle className="text-4xl text-orange-800 mb-4 font-bold">المحاور التكوينية</CardTitle>
              <CardDescription className="text-orange-600 text-xl leading-relaxed">
                الورشات التدريبية المتخصصة والمحاور الأساسية للملتقى
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                {workshops.map((workshop, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8, rotate: isVisible ? 0 : -10 }}
                    transition={{ duration: 1, delay: 6.5 + index * 0.2, type: "spring", bounce: 0.4 }}
                    whileHover={{
                      scale: 1.03,
                      rotate: 1,
                      boxShadow: "0 20px 40px rgba(251, 146, 60, 0.2)",
                    }}
                    className="group cursor-pointer"
                  >
                    <div className="flex items-center gap-6 p-8 bg-white rounded-2xl border-2 border-orange-100 hover:border-orange-200 transition-all duration-400 shadow-lg hover:shadow-xl">
                      <motion.div
                        whileHover={{
                          rotate: [0, -8, 8, 0],
                          scale: 1.15,
                        }}
                        transition={{ duration: 0.8 }}
                        className={`w-16 h-16 bg-gradient-to-r ${workshop.color} text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-400`}
                      >
                        {workshop.icon}
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-gray-800 text-xl group-hover:text-orange-600 transition-colors duration-300 mb-2">
                          {workshop.title}
                        </h3>
                        <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                          ورشة تدريبية متخصصة ومتقدمة
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Schedule Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 }}
          transition={{ duration: 1.2, delay: 7, type: "spring", bounce: 0.2 }}
          className="mb-16"
        >
          <Card className="bg-white/90 backdrop-blur-xl border-orange-200 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-stone-25 via-amber-25 to-orange-25" />
            <CardHeader className="text-center relative z-10 pb-8">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Calendar className="w-14 h-14 text-orange-500 mx-auto mb-6" />
              </motion.div>
              <CardTitle className="text-4xl text-orange-800 mb-4 font-bold">جدول أعمال الملتقى</CardTitle>
              <CardDescription className="text-orange-600 text-xl leading-relaxed">
                البرنامج التفصيلي للأيام الثلاثة مع جميع الأنشطة والورشات التدريبية
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="space-y-12">
                {scheduleData.map((dayData, dayIndex) => (
                  <motion.div
                    key={dayIndex}
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -60 }}
                    transition={{ duration: 1, delay: 7.5 + dayIndex * 0.3, type: "spring", bounce: 0.3 }}
                    className="relative"
                  >
                    {/* Day Header */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {dayIndex + 1}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-orange-800">{dayData.day}</h3>
                        <p className="text-orange-600 text-lg">{dayData.date}</p>
                      </div>
                    </div>

                    {/* Timeline */}
                    <div className="relative mr-8">
                      {/* Vertical Line */}
                      <div className="absolute right-8 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-300 to-amber-300"></div>

                      {/* Activities */}
                      <div className="space-y-6">
                        {dayData.activities.map((activity, activityIndex) => (
                          <motion.div
                            key={activityIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                            transition={{
                              duration: 0.6,
                              delay: 8 + dayIndex * 0.3 + activityIndex * 0.1,
                              type: "spring",
                              bounce: 0.4,
                            }}
                            whileHover={{
                              scale: 1.02,
                              boxShadow: "0 10px 30px rgba(251, 146, 60, 0.15)",
                            }}
                            className="relative flex items-start gap-6 group cursor-pointer"
                          >
                            {/* Timeline Dot */}
                            <div className="absolute right-6 w-6 h-6 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300 z-10"></div>

                            {/* Activity Card */}
                            <div className="flex-1 bg-white rounded-2xl p-6 border-2 border-orange-100 hover:border-orange-200 transition-all duration-300 shadow-lg hover:shadow-xl ml-4">
                              <div className="flex flex-col md:flex-row md:items-center gap-4">
                                {/* Time Badge */}
                                <div className="flex-shrink-0">
                                  <Badge className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 text-sm font-bold">
                                    {activity.time}
                                  </Badge>
                                </div>

                                {/* Activity Details */}
                                <div className="flex-1">
                                  <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                                    {activity.activity}
                                  </h4>
                                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
                                    <span className="text-orange-600 font-semibold">المسؤول: {activity.executor}</span>
                                    {activity.notes && (
                                      <>
                                        <span className="hidden sm:inline text-gray-400">•</span>
                                        <span className="text-gray-600 italic">{activity.notes}</span>
                                      </>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
        {/* Attendance Confirmation Section */}

       {/*  <motion.div
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 }}
  transition={{ duration: 1.2, delay: 7.5, type: "spring", bounce: 0.2 }}
  className="mb-16"
>
<Card className="bg-white/90 backdrop-blur-xl border-orange-200 shadow-2xl overflow-hidden max-w-xl mx-auto relative">
  <div className="absolute inset-0 bg-gradient-to-br from-amber-25 via-orange-25 to-stone-25 z-0" />

    <CardHeader className="text-center relative z-10 pb-6">
      <motion.div
        animate={{ rotateY: [0, 15, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <BookOpen className="w-12 h-12 text-orange-500 mx-auto mb-4" />
      </motion.div>
      <CardTitle className="text-3xl text-orange-800 font-bold">تأكيد الحضور</CardTitle>
      <CardDescription className="text-orange-600 text-md mt-2">
        الرجاء إدخال رقم الهاتف المرتبط بالتلغرام لتأكيد حضورك
      </CardDescription>
    </CardHeader>
    <CardContent className="relative z-10 px-6 pb-8">
      <div className="space-y-4">
        <input
          type="text"
          placeholder="أدخل رقم الهاتف المرتبط بالتلغرام"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-3 text-right rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder:text-gray-400 text-gray-800 shadow-sm bg-white/80 backdrop-blur"
        />
        <Button
          onClick={handleConfirm}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl text-lg font-bold transition duration-300"
        >
          تأكيد الحضور
        </Button>
        {confirmed && (
          <p className="text-green-600 text-center text-lg font-semibold mt-4">
            ✅ تم تأكيد حضورك بنجاح!
          </p>
        )}
      </div>
    </CardContent>
  </Card>
</motion.div>
*/}

        {/* Rules Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 }}
          transition={{ duration: 1.2, delay: 7.5, type: "spring", bounce: 0.2 }}
          className="mb-16"
        >
          <Card className="bg-white/90 backdrop-blur-xl border-orange-200 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-25 via-amber-25 to-stone-25" />
            <CardHeader className="text-center relative z-10 pb-8">
              <motion.div
                animate={{
                  rotate: [0, 8, -8, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <BookOpen className="w-14 h-14 text-orange-500 mx-auto mb-6" />
              </motion.div>
              <CardTitle className="text-4xl text-orange-800 mb-4 font-bold">القانون الداخلي للملتقى</CardTitle>
              <CardDescription className="text-orange-600 text-xl leading-relaxed max-w-3xl mx-auto">
                في إطار الحرص على توفير مناخ ملائم للتعلّم، والتفاعل الإيجابي، والانضباط، يُطلب من جميع المشاركين الالتزام التام بالقواعد التالية
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="space-y-6">
                {[
                  "الالتزام بمواقيت الصلوات الخمس جماعة، مع التأكيد على صلاة الصبح في وقتها",
                  "احترام مواعيد الورشات، الدورات، والجلسات كما هو مبيّن في البطاقة التقنية وجدول أعمال الملتقى",
                  "عدم مغادرة القاعات أثناء الجلسات دون إذن مسبق من المدرب أو المحاضر",
                  "الالتزام بمواقيت الاستيقاظ والنوم حسب البرنامج اليومي",
                  "عدم الخروج من مقر الملتقى بعد الساعة التاسعة مساءً إلا بإذن مسبق من الإدارة",
                  "وضع الهاتف في الوضع الصامت أثناء الورشات، مع التركيز الكامل على المحتوى المقدَّم",
                  "عدم الوقوف بجانب باب القاعات أو الخروج غير المبرر لتفادي إزعاج المحيط",
                  "احترام مواعيد الإطعام (فطور الصباح، الغداء، العشاء) وعدم التأخر عنها",
                  "المحافظة على النظافة في جميع الأماكن (مكان الإقامة، الورشات، المرافق...)",
                  "اتباع تعليمات وتوجيهات فريق التنظيم بكل جدية وعدم الخروج عنها",
                  "احترام الضوابط الشرعية والأخلاقية في التعامل بين الإخوة والأخوات",
                  "الحرص على الهندام اللائق، ومنع ارتداء السراويل القصيرة من طرف الإخوة",
                  "التحلي بالاحترام المتبادل وروح التعاون بين جميع المشاركين",
                  "المشاركة الفعّالة والإيجابية في جميع الأنشطة",
                  "تمثيل الملتقى بصورة مشرّفة داخل وخارج المقر"
                ].map((rule, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -60, rotateY: -30 }}
                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -60, rotateY: isVisible ? 0 : -30 }}
                    transition={{ duration: 0.8, delay: 8 + index * 0.05, type: "spring", bounce: 0.3 }}
                    whileHover={{
                      scale: 1.01,
                      x: 6,
                      boxShadow: "0 10px 25px rgba(251, 146, 60, 0.1)",
                    }}
                    className="group cursor-pointer"
                  >
                    <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-white to-orange-50/50 rounded-xl border-r-3 border-orange-300 hover:border-amber-400 transition-all duration-300 shadow-md hover:shadow-lg">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="w-8 h-8 bg-gradient-to-r from-orange-400 to-amber-400 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 shadow-md flex-shrink-0"
                      >
                        {index + 1}
                      </motion.div>
                      <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                        {rule}
                      </p>
                    </div>
                  </motion.div>
                ))}
                
                {/* Closing Message */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                  transition={{ duration: 1, delay: 9 }}
                  className="mt-12 text-center"
                >
                  <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-8 border-2 border-orange-200 shadow-lg">
                    <motion.div
                      animate={{
                        scale: [1, 1.02, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      <h4 className="text-2xl font-bold text-orange-800 mb-4">ختامًا</h4>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        إن التزامك بهذه الضوابط ليس فقط دليلًا على وعيك وانضباطك، بل مساهمة فعلية في إنجاح هذا الملتقى الجامع.
                      </p>
                      <p className="text-xl font-bold text-orange-700 mt-4">
                        فلنكن على قدر المسؤولية...
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Dedication Section with Professional Styling */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: -30 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8, rotateX: isVisible ? 0 : -30 }}
          transition={{ duration: 1.5, delay: 10.5, type: "spring", bounce: 0.3 }}
          className="text-center mb-12"
        >
          <Card className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-white shadow-2xl overflow-hidden">
            <div className="absolute inset-0" />
            <CardContent className="py-16 relative z-10">
              <motion.div
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <h3 className="text-3xl font-black mb-6 drop-shadow-lg">دفعة الشهيد إسماعيل هنية رحمه الله</h3>
                <p className="text-xl font-semibold mb-8 drop-shadow opacity-90">
                  الدفعة الخامسة - نحو تسويق أكثر احترافية وفعالية
                </p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, rotate: 1 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  className="bg-white text-orange-600 hover:bg-orange-50 font-bold px-12 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-400 text-lg"
                >
                  ابدأ رحلتك التدريبية
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Professional Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 1, delay: 8 }}
          className="text-center text-orange-800"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-orange-200">
            <p className="text-lg font-semibold mb-2">قسم التسويق والإعلام - المكتب التنفيذي الوطني</p>
            <p className="text-lg font-semibold">أكاديمية جيل الترجيح للتأهيل القيادي</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}