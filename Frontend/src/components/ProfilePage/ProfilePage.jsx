import React ,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import jwt from 'jwt-decode'
import  Cookies  from 'js-cookie'

import './ProfilePage.css'
import Navbar from '../Navbar/Navbar'


function ProfilePage() {
    const navigate = useNavigate()
    const [loading,setLoading] = useState(true)
    const [user,setUser] = useState("")

    useEffect(() => {
        if(Cookies.get('userToken')){
            var userData = jwt(Cookies.get('userToken')); 
            setUser(userData)
        }
        else{
            navigate('/')
        }
    },[])
    

  return (
    <>
        <Navbar />
        <section className="profilesection">
            <div className="profilebox">
                <div className="leftbox box">
                    <img className='profileimg' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" alt="" />
                    <input type="file" />
                </div>
                <div className="rightbox box">
                    <h1>@{user.username}</h1>
                    <a target='_blank' href="https://bishalde.vercel.app/"> https://bishalde.vercel.app/</a>
                    <h3>Knight @LeetCode | Open Source Contributor @Hacktoberfest'22 | Winner SWOC'23 | Striver SDE Sheet Challenge Winner</h3>
                    <div className="sociallinks">
                    <img src="https://img.icons8.com/sf-black/40/ffffff/github.png" alt="github"/>
                    <img src="https://img.icons8.com/ios-filled/40/ffffff/linkedin.png" alt="linkedin"/>
                    <img src="https://img.icons8.com/ios-glyphs/40/ffffff/instagram-new.png" alt="instagram-new"/>
                    <img src="https://img.icons8.com/ios-filled/40/ffffff/youtube-play.png" alt="youtube-play"/>
                    </div>
                    <a className='editbtn' href='/editprofile'>Edit profile</a>

                </div>
            </div>

            <div className="addprojectsection">
                <form action="">
                <h1>Add Your Project Here</h1>
                <label htmlFor="projectname">Name</label>
                <input type="text" />
                <label htmlFor="Description">Description</label>
                <textarea name="" id="Description"rows="5"></textarea>
                <label htmlFor="link">GitHub Link</label>
                <input type="url" id="link" />
                <label htmlFor="urllink">Website Link</label>
                <input type="url" id="urllink" />
                <label htmlFor="languagesused">Coding languages</label>
                <h5>Seperate them with a comma [,]</h5>
                <input type="text" name="" id="languagesused" />
                <div className="post-btn">
                    <button className='sec'>Post</button>
                    <button type='reset'>Reset</button>
                </div>
                </form>
            </div>

        </section>

    </>
  )
}

export default ProfilePage