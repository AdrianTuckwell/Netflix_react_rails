const React = require('react')

const Show = (props) => (
  <div className='show'>
    <img src={`images/${props.image}`} className='show-image' />
    <div className='show-details'>
      <h3 className='show-title'>{props.title}</h3>
      <h4 className='show-series'>Series ({props.series})</h4>
      <p className='show-description'>{props.description}</p>
    </div>
  </div>
)

const { string, number } = React.PropTypes

Show.propTypes = {
  title: string.isRequired,
  image: string.isRequired,
  series: number.isRequired,
  description: string.isRequired
}


module.exports = Show