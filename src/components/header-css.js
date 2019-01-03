const styles = {
  Header: {
    background: 'rebeccapurple',
    marginBottom: '1rem',
  },
  myHdrFlexRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    flexDirection: 'row',
  },
  myHdrContainer: {
    position: 'relative',
    margin: `0 auto`,
    maxWidth: '95vw',
    padding: '1rem',
  },

  title: {
    fontSize: '1.5rem',
    color: 'white',
    margin: 0,
  },

  subtitle: {
    fontSize: '1rem',
    color: 'white',
    margin: 0,
  },

  myLogoImg: {
    width: '200px',
    height: '100px',
    padding: 0,
    paddingRight: '4%',
    margin: 0,
    alignSelf: 'top',
    transform: 'rotate(-45deg)',
  },
  myLink: {
    color: 'white',
    textDecoration: 'none',
  },
  menuNav: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    color: '#C0FFEE',
    display: 'flex',
    flex: 1,
  },
  menuNavLi: {
    listStyleType: 'none',
    paddingRight: 8,
    color: 'white',
    textDecoration: 'none',
  },
}

export default styles
