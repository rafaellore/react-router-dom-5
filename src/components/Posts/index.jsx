import { useContext, useEffect, useRef } from 'react';
import {
  decrementCounter,
  incrementCounter,
} from '../../contexts/CounterProvider/action';
import { CounterContext } from '../../contexts/CounterProvider/context';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import { PostsContext } from '../../contexts/PostsProvider/context';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Skeleton } from '@mui/material';

export const Posts = () => {
  const isMounted = useRef(true);

  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;

  const counterContext = useContext(CounterContext);
  const { counterState, counterDispatch } = counterContext;

  useEffect(() => {
    loadPosts(postsDispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, [postsDispatch]);

  return (
    <>
      <h1>POSTS</h1>
      <Button
        variant="contained"
        onClick={() => incrementCounter(counterDispatch)}
      >
        Counter {counterState.counter}+
      </Button>
      <Button
        variant="contained"
        onClick={() => decrementCounter(counterDispatch)}
      >
        Counter {counterState.counter}-
      </Button>
      {postsState.loading && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Skeleton variant="rounded" width={'100%'} height={120} />
          <Skeleton variant="rounded" width={'100%'} height={120} />
          <Skeleton variant="rounded" width={'100%'} height={120} />
          <Skeleton variant="rounded" width={'100%'} height={120} />
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {postsState.posts.map((p) => (
          <Card key={p.id}>
            <CardContent>
              <p>{p.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};
