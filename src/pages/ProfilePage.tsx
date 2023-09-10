import { Box, Button, Grid, Stack } from '@mui/material';
import RegisteredNavBar from '../components/RegisteredNavBar';
import DataBox from '../components/DataBox';
import ItSkillBlock from '../components/ItSkillBlock';
import BlockAchevements from '../components/BlockAchevements';

function BlockDataList(props: { title: string; projects: string[] }) {
    return (
        <Grid container sx={{ mt: 3, ml: 3, mr: 4 }}>
            <Grid item xs={12} lg={12}>
                <Box
                    sx={{
                        textAlign: 'left',
                        minHeight: '150px',
                        backgroundColor: '#ffffff14',
                        borderRadius: 4,
                        p: 4,
                    }}
                >
                    <p
                        style={{
                            paddingBottom: '2px',
                            fontWeight: '700',
                            margin: '8px',
                            marginBottom: '16px',
                            color: '#FFF',
                        }}
                    >
                        {props.title}
                    </p>
                    <Grid container spacing={2}>
                        {props.projects.map((project) => (
                            <Grid item key={project}>
                                <DataBox text={project} fontSize={14} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    );
}

export default function ProfilePage() {
    const props = {
        user: {
            fio: 'Тарасова Елизавета Юрьевна',
            level: 50,
            profileUrl: '/images/lisa.png',
            role: 'UX/UI Designer',
            telegram: '@lisatarasova',
            course: '2 курс',
        },
    };

    return (
        <Box className='profile' sx={{ pt: 5 }}>
            <RegisteredNavBar selectedTab='Мой профиль' />
            <Grid container sx={{ mt: 3, ml: 3, mr: 4, width: '100%' }} gap={2}>
                <Grid item xs={12} lg={5}>
                    {/* block profile  */}
                    <Box
                        sx={{
                            padding: 2,
                            backgroundColor: '#ffffff14',
                            textAlign: 'center',
                            width: '100%',
                            borderRadius: 4,
                        }}
                    >
                        {/* add bottom border to h2 */}
                        <p
                            style={{
                                borderBottom: '2px solid #C059FF',
                                paddingBottom: '2px',
                                fontWeight: '700',

                                color: '#FFF',
                            }}
                        >
                            {props.user.fio}
                        </p>
                        <Grid container>
                            <Grid item xs={6} sx={{ p: 2 }}>
                                <img
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                    }}
                                    src={props.user.profileUrl}
                                    alt=''
                                />
                            </Grid>
                            <Grid item xs={6} sx={{ minWidth: '150' }}>
                                <Box>
                                    <p
                                        style={{
                                            color: '#FFF',
                                            fontWeight: '700',
                                            fontSize: '20px',
                                        }}
                                    >
                                        Level: {props.user.level}
                                    </p>
                                    <DataBox text={props.user.role} fontSize={14} />
                                    <DataBox text={props.user.telegram} fontSize={14} />
                                    <DataBox text={props.user.course} fontSize={14} />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Button
                            sx={{
                                mt: 2,
                                padding: 2,
                                backgroundColor: '#ffffff14',
                                border: '1px solid #C059FF',
                                color: '#FFF',
                                width: '100%',
                                fontSize: '14px',
                                borderRadius: 4,
                                '&:hover': {
                                    backgroundColor: '#C059FF',
                                },
                            }}
                        >
                            Отредактировать данные
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} lg={5}>
                    {/* block it */}
                    {/* It skills */}
                    <ItSkillBlock />
                    {/* It skills */}
                </Grid>
                <Grid item xs={12} lg={2}>
                    <BlockAchevements />
                </Grid>
            </Grid>
            <BlockDataList
                title='Мои проекты:'
                projects={['Сервис для поиска работы', 'Шиза от банка']}
            />
            <BlockDataList
                title='Пройденные хакатоны:'
                projects={['RLT-2023', 'ЛЦТ-2023', 'Код города 2023']}
            />
        </Box>
    );
}
