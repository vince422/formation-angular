import { AlbumsService } from './albums.service';
import { LoggerService } from './logger.service';
import { Album } from './album';
import { defer } from 'rxjs';

function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}
/* Incomplet */
describe('AlbumsService', () => {
  let httpClientSpy;
  let albumsService: AlbumsService;
  let logger: LoggerService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    logger = { log: (msg: string) => {}};
  });

  it('should get some albums', () => {
    const expectedData: Album[] = [
      {
        id: 2,
        title: 'Echoes',
        performer: 'Pink Floyd',
        price: 20,
        year: 2001,
        cover: 'https://img.discogs.com/d1NBrfuCh9VKASs6cWjH0GJ_Ntk=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-575044-1355435867-7324.jpeg.jpg'
      },
      {
        id: 3,
        title: 'Led Zeppelin IV',
        performer: 'Led Zeppelin',
        price: 18,
        year: 1971,
        cover: 'https://img.discogs.com/SmdalY-gOwtPuVv3FvW23ewg8b4=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-1015465-1366311867-2785.jpeg.jpg'
      }
    ];
    httpClientSpy.get.and.returnValue(asyncData(expectedData));
    albumsService = new AlbumsService(logger as LoggerService, httpClientSpy);
    expect(albumsService.albums.length).toBe(2);
  });
});
