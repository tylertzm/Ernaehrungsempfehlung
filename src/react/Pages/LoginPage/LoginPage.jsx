import React from 'react'
import {
  Stack,
  Typography,
  Container,
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  Button
} from '@mui/material'

import {
  Restore as RestoreIcon,
  Favorite as FavoriteIcon,
  Person4 as ProfileIcon
} from '@mui/icons-material'

import AppLogo from '../assets/favicon.svg'

const borderRadius = 6

const LoginForm = ({
  username,
  password,
  onUsernameChange,
  onPasswordChange,
  onLoginClicked
}) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}
  >
    <div style={{ marginBottom: '5px' }}>
      <span
        style={{
          display: 'inline-block',
          width: '100px'
        }}
      >
        Username:
      </span>
      <input
        type="text"
        value={username}
        onChange={e => onUsernameChange(e.target.value)}
      />
    </div>
    <div>
      <span
        style={{
          display: 'inline-block',
          width: '100px'
        }}
      >
        Password:
      </span>
      <input
        type="password"
        value={password}
        onChange={e => onPasswordChange(e.target.value)}
      />
    </div>
    <button
      type="button"
      onClick={onLoginClicked}
    >
      Login
    </button>
  </div>
)

const LoginPage = () => (
  <Stack
    direction="row"
    justifyContent="center"
    sx={{
      width: '100%',
      height: '100%',
      paddingTop: theme => theme.spacing(5),
      paddingBottom: theme => theme.spacing(5)
    }}
  >
    <Container
      maxWidth="xs"
      disableGutters
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        marginBottom={2}
      >
        <img
          src={AppLogo}
          alt="App Logo"
          style={{
            width: '40px',
            height: '40px'
          }}
        />
        <Typography variant="h5">
          Login here
        </Typography>
      </Stack>
      <Paper
        elevation={6}
        sx={{
          flex: '1 1 auto',
          display: 'flex',
          flexDirection: 'column',
          paddingTop: 2,
          paddingRight: 1,
          paddingBottom: 2,
          paddingLeft: 1,
          overflow: 'hidden',
          borderRadius: theme => theme.spacing(borderRadius),
          background: theme => theme.palette.grey[900]
        }}
      >
        <Stack
          flex="1 1 auto"
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            overflow: 'hidden',
            borderRadius: theme => theme.spacing(borderRadius),
            background: theme => theme.palette.background.paper
          }}
        >
          <LoginForm 
            username="" 
            password="" 
            onUsernameChange={() => {}} 
            onPasswordChange={() => {}} 
            onLoginClicked={() => {}} 
          />
          <BottomNavigation
            showLabels
            value={0}
            sx={{ width: '100%' }}
          >
            <BottomNavigationAction
              label="Recents"
              icon={<RestoreIcon />}
            />
            <BottomNavigationAction
              label="Favorites"
              icon={<FavoriteIcon />}
            />
            <BottomNavigationAction
              label="Profile"
              icon={<ProfileIcon />}
            />
          </BottomNavigation>
        </Stack>
      </Paper>
    </Container>
  </Stack>
)

export default LoginPage