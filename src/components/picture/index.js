import { h, Component } from 'preact';
// const myImg = document.querySelector('.animate-me');

// observer = new IntersectionObserver((entry, observer) => {
//   console.log('entry:', entry);
//   console.log('observer:', observer);
// });

// observer.observe(myImg);

class Picture extends Component {
  state = { load: false };

  componentDidMount() {
    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          console.log('in the view');
          this.setState({ load: true });
          observer.unobserve(entry.target);
        } else {
          console.log('out of view');
        }
      });
    });
    this.observer.observe(this.ref);
  }

  render() {
    const { load } = this.state;
    const { imageName, alt, folder, ...props } = this.props;
    const folderRoute = folder ? `${folder}/` : '';
    return (
      <div {...props} ref={c => (this.ref = c)}>
        <picture>
          {load && (
            <source
              srcset={`../../assets/images/${folderRoute}${imageName}.webp`}
              type="image/webp"
            />
          )}
          {load && (
            <source
              srcset={`../../assets/images/${folderRoute}${imageName}.png`}
              type="image/webp"
            />
          )}
          {load && (
            <img
              src={`../../assets/images/${folderRoute}${imageName}.png`}
              type="image/webp"
              alt={alt}
            />
          )}
        </picture>
      </div>
    );
  }
}

Picture.propTypes = {};

export default Picture;
