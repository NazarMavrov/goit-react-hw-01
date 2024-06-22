import css from './Profile.module.css'

export default function Profile() {
    return(  <div className={css.profileWrapp}>
<div>
<img
    src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
    alt="User avatar"
    width={160}
    height={160}
/>
<p className={css.headText}>Petra Marica</p>
<p className={css.headText}>@pmarica</p>
<p className={css.headText}>Salvador, Brasil</p>
</div>

<ul>
<li>
<span>Followers</span>
<span>1000</span>
</li>
<li>
<span>Views</span>
<span>2000</span>
</li>
<li>
<span>Likes</span>
<span>3000</span>
</li>
</ul>
</div>)
}