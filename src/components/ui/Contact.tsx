import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Contact data
const members = [
  {
    name: "Adam Boufeid",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGYQl4TxXV85A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1701448555292?e=1740009600&v=beta&t=LwWYB_qZIZGAc8QohPee8yEDV7bF23mqEDLUdzLMJNo",
    linkedin: "https://www.linkedin.com/in/adam-boufeid-454918289/",
  },
  {
    name: "Salma Merchaoui",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFyWSZkDsKUmQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718656183701?e=1740009600&v=beta&t=plpPcbSLVugLUo7IVM0HIsMsRN_soAstOAU0xmHGPjI",
    linkedin: "https://www.linkedin.com/in/salma-merchaoui-13b666310/",
  },
  {
    name: "Sarra Ben Doub",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHQ2dENI614lw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727125508723?e=1740009600&v=beta&t=OD8rjgPMvEZGcat-33EGKr_tsYCY8oZRNwO2GVkgA8E",
    linkedin: "https://www.linkedin.com/in/sarra-ben-doub/",
  },

  {
    name: "Fatma Hammedi",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQG1eYJEU9Qqjg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1700666708319?e=1740009600&v=beta&t=bH2dFDAa4Gu1uiPis1SLwL2xF-F8-vgXAnio08xi_co",
    linkedin: "https://www.linkedin.com/in/fatmahammedi/",
  },
  {
    name: "AbdelMalek Abed",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFaWkkYZgeDhg/profile-displayphoto-shrink_800_800/B4DZPRj_RqHMAc-/0/1734387693777?e=1740009600&v=beta&t=WDOnTIgzCG118pLm9ijt01wLbJTxcK0CyrWy4Zr9yBY",
    linkedin: "https://www.linkedin.com/in/abdelmalek-abed-613493289/",
  },
  {
    name: "Nidhal Zaghdoudi",
    image: "https://media.licdn.com/dms/image/v2/D5603AQGIwI-uvHqJtA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718254301732?e=1740009600&v=beta&t=JhsUjWRD8fXG9OTsbAAa86qraZQnuGz2JjUTpef1zzk",
    linkedin: "https://www.linkedin.com/in/nidhal-zaghdoudi-612579309/",
  },
  {
    name: "Karim Maktouf",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQFIhWN9ZEO4kg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1695844363270?e=1740009600&v=beta&t=PMdymwPsxeNFCiMFt543o4krTsO--Z8uefdl6iloDgY",
    linkedin: "https://www.linkedin.com/in/karim-maktouf-60860a293/",
  },
  {
    name: "Majd Souissi",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQE_u06YGSlDTA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731251160050?e=1740009600&v=beta&t=BDpEbqa9_xkfIPvgAKKcsrYHuP7t02p-eGqSNAki0Ic",
    linkedin: "https://www.linkedin.com/in/majd-souissi-860611290/",
  },
  {
    name: "Islem Ben Manssour",
    image: "https://via.placeholder.com/100",
    linkedin: "https://www.linkedin.com/in/ben-mansour-islem-b47971293/",
  },
  {
    name: "Youssef Tati",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQHPwg12q_GPeA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730499274681?e=1740009600&v=beta&t=he0dN29yvtjY6_TFWxDybEv62Lz9HDaKSRTvvxuosxA",
    linkedin: "https://www.linkedin.com/in/yousseftatii/",
  },
  {
    name: "Mohaned Barka",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQHnk4FSr1sqSw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1700309575694?e=1740009600&v=beta&t=YrI8CilAaGSrbqE60_NJEcb9Vp1XojFYMohqCmhu7U0",
    linkedin: "https://www.linkedin.com/in/mohaned-barka/https://www.linkedin.com/in/mohaned-barka/overlay/photo/",
  },
  {
    name: "Ranim Ben Daoud",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQECtqsoDzV_JA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714601285520?e=1740009600&v=beta&t=dV_E9Nj5Lb_lEWlrq8wzTBDNu7TCcTXmSjr0s3FkuAg",
    linkedin: "https://www.linkedin.com/in/ranim-ben-daoud-78744a292/",
  },
  {
    name: "Youssef Smei",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFU1LI6qt-4rg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731016191313?e=1740009600&v=beta&t=GgN2FBCqZcwu4IQqmhEtdKxrvxT3j0Leu5ESLWEcQtU",
    linkedin: "https://www.linkedin.com/in/youssef-smei-508b991a1/",
  },
];

export function Contact() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {members.map((member) => (
        <Card key={member.name} className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              width={100}
              height={100}
              className="rounded-full"
            />
            <CardTitle className="mt-4 text-center text-lg font-semibold">
              {member.name}
            </CardTitle>
          </CardHeader>
          <CardFooter className="flex justify-center">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View LinkedIn Profile
            </a>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
