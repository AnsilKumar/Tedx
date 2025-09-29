import Image from "next/image";

interface OrganizerData {
  Team: string;
  Profile: ProfileData[];
}

interface ProfileData {
  image: string;
  name: string;
  Tag?: string;
}

interface ProfileProps {
  image: string;
  name: string;
  Tag?: string;
}

const OrganizerData: OrganizerData[] = [
  {
    Team: "",
    Profile: [
      {
        image: "/Organiser/core/hen.png",
        name: "Henba",
        Tag: "Curator & Licensee",
      },
      {
        image: "/Organiser/core/ansil.png",
        name: "Ansil",
        Tag: "Co-curator",
      },
      {
        image: "/Organiser/satwik.png",
        name: "Satwik",
        Tag: "Mentor",
      }
    ],
  },
  {
    Team: "Speaker Curation",
    Profile: [
      {
        image: "/Organiser/speakerCuration/Kanishka.png",
        name: "Kanishka",
      },
      {
        image: "/Organiser/speakerCuration/Poonam.png",
        name: "Poonam",
      },
      {
        image: "/Organiser/speakerCuration/Meghana.png",
        name: "Meghana",
      },
      {
        image: "/Organiser/speakerCuration/Spoorthi.png",
        name: "Spoorthi",
      },
      {
        image: "/Organiser/speakerCuration/Nikita.png",
        name: "Nikita",
      },
    ],
  },
  {
    Team: "Promotion Marketing",
    Profile: [
      {
        image: "/Organiser/Promotion&Marketing/advithsuvarna.png",
        name: "Advith Suvarn",
      },
      {
        image: "/Organiser/Promotion&Marketing/Keeshalya.png",
        name: "Keeshalya",
      },
      {
        image: "/Organiser/Promotion&Marketing/Suraksha.png",
        name: "Suraksha",
      },
      {
        image:"/Organiser/Promotion&Marketing/Kshama.png",
        name:"Kshama"
      },
    
      {
        image: "/Organiser/Promotion&Marketing/Tejesvin.png",
        name: "Tejesvin",
      },
    ],
  },
  {
    Team: "Visual Designer",
    Profile: [
      {
        image: "/Organiser/FinanceVisualDesigner/Dhanraj.png",
        name: "Dhanraj",
      },
    ],
  },
  {
    Team: "Finance",
    Profile: [
      {
        image: "/Organiser/FinanceVisualDesigner/Swapnil.png",
        name: "Swapnil",
      },
    ],
  },
  {
    Team: "Stage Management",
    Profile: [
      {   
      image: "/Organiser/StageManagment/swanjit.png",
      name: "Swanjit",
      },
      {
        image: "/Organiser/StageManagment/Adithya.png",
        name: "Adithya",
      },
      {
        image: "/Organiser/StageManagment/ayukshi.png",
        name: "Ayukshi",
      },
      {
        image: "/Organiser/StageManagment/pranit.png",
        name: "Pranit",
      },
    ]
  },
  {
    Team: "MC",
    Profile: [
      {
        image: "/Organiser/MC/Aaradhyaprabhakar.png",
        name: "Aaradhya Prabhakar",
      },
      {
        image: "/Organiser/MC/adyashetty.png",
        name: "Adya Shetty",
      },
      {
        image: "/Organiser/MC/Aeona.png",
        name: "Aeona",
      },
      {
        image: "/Organiser/MC/Harshini.png",
        name: "Harshini",
      },{
        image: "/Organiser/MC/Sharvari.png",
        name: "Sharvari",
      },
      {
        image: "/Organiser/MC/stella.png",
        name: "Stella",
      }
    ]
  },
  {
    Team: "Web Development",
    Profile: [
      {
        image: "/Organiser/technical/prasana.png",
        name: "Prasana",
      },{
        image: "/Organiser/technical/srujan.png",
        name: "Srujan",
      }
    ]
  },
  {
    Team: "Social Media",
    Profile: [
      {
        image: "/Organiser/SocialMedia/Bharath.png",
        name: "Bharath",
      },
      {
        image: "/Organiser/SocialMedia/Vinith.png",
        name: "Vinith",
      },
      {
        image: "/Organiser/SocialMedia/Viraj.png",
        name: "Viraj",
      },
      {
        image: "/Organiser/SocialMedia/Khyati.png",
        name: "Khyati",
      },
      {
        image: "/Organiser/SocialMedia/Sakshi.png",
        name: "Sakshi",
      },
      
    ],
  },

  {
    Team: "Volunteers",
    Profile: [
      {
        image: "/Organiser/Volunteers/Vaishnav.png",
        name: "Vaishnav",
      },
      {
        image: "/Organiser/Volunteers/vishnu.png",
        name: "Vishnu",
      },
      {
        image: "/Organiser/Volunteers/srujann.png",
        name: "Sujan",
      },
      {
        image: "/Organiser/Volunteers/Adithi.png",
        name: "Adithi",
      },
      {
        image: "/Organiser/Volunteers/Niriksha.png",
        name: "Niriksha",
      },
      
    ],
  },
];

function Profile({ image, name, Tag }: ProfileProps) {
  return (
    <div className="max-w-[150px]  text-center ">
      <Image
        src={image}
        alt={name}
        width={150}
        height={150}
        className="grayscale rounded-xl object-cover mx-auto"
      />
      <p className="pt-2 text-white font-bold">{name}</p>
      <p className="pt-2 text-ted-red font-bold">{Tag}</p>
    </div>
  );
}

export default function Organizer() {
  return (
    <div className="w-full h-full bg-black flex flex-col items-center justify-center py-16">
      <h3 className="text-5xl sm:text-6xl md:text-4xl lg:text-6xl uppercase text-white font-extrabold tracking-tight flex items-baseline justify-center gap-2 mb-10 mt-[30] md:mt-[100px]">
        Organizers
      </h3>
      <div className="w-full max-w-6xl px-4 flex flex-col gap-16  ">
        {OrganizerData.map((organizerData, teamIndex) => (
          <div
            key={teamIndex}
            className="flex flex-col justify-center items-center text-center "
          >
            <h1 className=" w-full mx-0 text-4xl sm:text-5xl md:text-3xl lg:text-5xl Uppercase text-white font-extrobold  mb-6">
              {organizerData.Team}
            </h1>
            <div className=" flex flex-wrap gap-10 justify-center items-center">
              {organizerData.Profile.map((profileData, profileIndex) => (
                <Profile
                  key={profileIndex}
                  image={profileData.image}
                  name={profileData.name}
                  Tag={profileData.Tag}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
