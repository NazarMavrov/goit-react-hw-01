import css from './Profile.module.css'

export default function Profile({ name, tag, location, image, stats }) {
    return(  <div className={css.profileWrapp}>
<div>
<img
    src={image}
/>
<p className={css.headText}>{name}</p>
<p className={css.headText}>{tag}</p>
<p className={css.headText}>{location}</p>
</div>

<ul>
<li>
<span>Followers</span>
<span>{stats.followers}</span>
</li>
<li>
<span>Views</span>
<span>{stats.views}</span>
</li>
<li>
<span>Likes</span>
<span>{stats.likes}</span>
</li>
</ul>
</div>)
}