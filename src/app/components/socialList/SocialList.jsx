import data from "./const/const"
import Link from "next/link"
import Image from "next/image"
import st from './SocialList.module.scss'
import cn from 'classnames'

const SocialList = ({dataList=data, className=''}) => {
  return (
     <div className={cn(st.socialContainer, className)}> 
        {dataList.map(({id, name, link}) => (
          <Link href={link} key={id} className={st.socialItem}>
            <div className={st.imageWrapper}>
              <Image src={name} alt={`Social icon ${id}`} fill className={st.image}/>
            </div>
          </Link>
        ))}
      </div>
  )
}

export default SocialList
