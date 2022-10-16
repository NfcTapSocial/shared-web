import Icon from "./components/Icon";
import {ReactComponent as IconMore} from './assets/icon-more.svg'
import {ReactComponent as IconShare} from './assets/icon-share.svg'
import {ReactComponent as IconTwitter} from './assets/icon-twitter.svg'
import {ReactComponent as IconIns} from './assets/icon-ins.svg'
import {ReactComponent as IconFb} from './assets/icon-fb.svg'
import {ReactComponent as IconMail} from './assets/icon-mail.svg'
import {ReactComponent as IconPhone} from './assets/icon-phone.svg'
import {ReactComponent as IconLinkedin} from './assets/icon-linkedin.svg'
import PicMan from './assets/man.png'

function ContactItem(props: {
  contact: Contact
}) {
  const {
    icon,
    label,
    type,
    value
  } = props.contact

  function getLink(type: string, value: string) {
    if (type === 'twitter') {
      return `https://twitter.com/${value.replace(/@/, '')}`
    }
    if (type === 'instagram') {
      return `https://www.instagram.com/${value.replace(/@/, '')}`
    }
    if (type === 'mail') {
      return `mailto://${value}`
    }
    return value
  }


  return (
    <div className={'px-6 py-4 flex items-center border-b-[1px]'}
         onClick={() => {
           window.open(getLink(type, value))
         }}
    >
      <Icon
        className={'w-[40px] h-[40px] flex justify-center items-center bg-[#E8F3FF] rounded-full'}
        elClassName={'w-[20px]'}
        icon={icon}
      />
      <div className={'ml-4 flex flex-col cursor-pointer'}>
        <span className={'text-md font-bold text-[#333333]'}>{label}</span>
        <small className={'text-xs text-[#ADB8CC]'}>{value}</small>
      </div>
      <Icon className={'ml-auto'} icon={<IconShare/>}/>
    </div>
  )
}

interface Contact {
  label: string,
  type: string,
  icon: JSX.Element,
  value: string
}

const contacts: Contact[] = [
  {
    label: "Twitter",
    type: 'twitter',
    icon: <IconTwitter/>,
    value: "@brrruski"
  },
  {
    label: "LinkedIn",
    type: 'linkedin',
    icon: <IconLinkedin/>,
    value: "https://www.linkedin.com/in/sizhe-wang-386a08248/"
  },
  {
    label: "Mail",
    type: 'mail',
    icon: <IconMail/>,
    value: "wang.sizh@northeastern.edu"
  },
  {
    label: "Phone",
    type: 'phone',
    icon: <IconPhone/>,
    value: "+1617-251-4933"
  },
]

function App() {
  return (
    <div className={"bg-[#F3F5F7] flex flex-col w-[100vw] min-h-[100vh]"}>
      <header className={'px-6 py-6 flex justify-between items-center bg-white'}>
        <h1 className={'text-xl text-[#333333] font-bold'}>Tap Social</h1>
        <Icon className={''} icon={<IconMore/>}/>
      </header>

      <main>
        <section className={'flex flex-col items-center pt-6 pb-12 bg-white'}>
          <div className={'w-[110px] h-[110px] bg-[#E8F3FF] rounded-full flex justify-center items-center'}>
            <img className={'w-[110px] rounded-full'} src={PicMan} alt="avatar"/>
          </div>
          <p className={'mt-6 text-lg text-[#6B7A99] font-bold'}>Bruski Wang</p>
          <small className={'text-[#ADB8CC] mt-1 font-bold'}>wang.sizh@northeastern.edu</small>
        </section>

        <section className={'bg-white mt-4'}>
          {contacts.map((contact, index) => {
            return (
              <ContactItem
                key={index}
                contact={contact}
              />
            )
          })}
        </section>
      </main>
    </div>
  )
}

export default App
