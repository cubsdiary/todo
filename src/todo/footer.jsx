import '../common/stylus/footer.styl'

export default {
  data() {
    return {
      author: 'VUE SSR JSX  by cubsdiary.com'
    }
  },
  render() {
    return (
      <div id="footer">
        <span>{this.author}</span>
      </div>
    )
  }
}
