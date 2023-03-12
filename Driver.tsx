import { Box, Button, styled, Typography } from '@mui/material'
import CardContainer from '../../components/CardContainer'
import { PageContent } from '../../components/PageContent'
import PageHeader from '../../components/PageHeader'
import Table from '../../components/Tables/BasicTable/Table'
import EditIcon from '@mui/icons-material/Edit'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { useNavigate } from 'react-router-dom'
import { StyledDeleteButton, StyledEditButton } from './styles'
import { DriversList } from './DataDefinition'

function Drivers() {
  const navigate = useNavigate()
  const RiderColumn = [
    {
      title: 'No.',
      key: '',
      dataIndex: '',
      render: (_, row, index) => index + 1,
    },
    {
      title: 'RiderName',
      key: 'name',
      dataIndex: 'name',
    },
    {
      title: 'Email',
      key: 'email',
      dataIndex: 'email',
    },
    {
      title: 'Contact No.',
      key: 'contactNumber',
      dataIndex: 'contactNumber',
    },
    {
      title: 'City',
      key: 'city',
      dataIndex: 'city',
    },
    {
      title: 'Reviews',
      key: 'reviews',
      dataIndex: 'reviews',
    },
    {
      title: 'Online / Offline',
      key: '',
      dataIndex: '',
      render: (_, row) => {
        return (
          <>
            <div
              style={{
                display: 'flex',
                gap: '10px',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Button
                sx={(theme) => ({
                  backgroundColor:
                    row?.online == true
                      ? theme.palette.common.green
                      : theme.palette.error.main,
                })}
              >
                {row?.online ? 'Online' : 'Offline'}
              </Button>
            </div>
          </>
        )
      },
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (_, row, index) => {
        return (
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <Button
              sx={(theme) => ({
                backgroundColor:
                  row?.status == 'approved'
                    ? theme.palette.common.green
                    : theme.palette.error.main,
              })}
            >
              {row?.status}
            </Button>
          </div>
        )
      },
    },
    {
      title: 'More Actions',
      key: '',
      dataIndex: '',
      render: (_, row, index) => {
        return (
          <>
            <div
              style={{
                display: 'flex',
                gap: '10px',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Button
                sx={(theme) => ({
                  backgroundColor: theme.palette.primary.light,
                })}
                onClick={() => navigate('/riders/rider/history/1')}
              >
                Ride History
              </Button>
              <Button
                sx={(theme) => ({
                  backgroundColor: theme.palette.primary.main,
                })}
              >
                Document List
              </Button>
              <Button
                sx={(theme) => ({
                  backgroundColor: theme.palette.common.yellow,
                })}
              >
                Statement
              </Button>
            </div>
          </>
        )
      },
    },
    {
      title: 'Actions',
      key: '',
      dataIndex: '',
      render: (_, row, index) => {
        return (
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <StyledEditButton>
              <EditIcon />
            </StyledEditButton>
          </div>
        )
      },
    },
  ]

  return (
    <>
      <PageHeader title={'Drivers'} />
      <PageContent>
        <CardContainer
          actions={[
            <Box
              key={0}
              sx={{ padding: '20px 0px', display: 'flex', gap: '10px' }}
            >
              <Button key={0}>Add Driver</Button>
              <Button key={1} variant="outlined">
                Back
              </Button>
            </Box>,
          ]}
        >
          <Table
            columns={RiderColumn}
            dataSource={DriversList ?? []}
            loading={false}
          />
        </CardContainer>
      </PageContent>
    </>
  )
}
export default Drivers
