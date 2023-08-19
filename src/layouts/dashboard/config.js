import { Chip, SvgIcon } from '@mui/material';
import AlignLeft02Icon from '../../icons/untitled-ui/duocolor/align-left-02';
import BarChartSquare02Icon from '../../icons/untitled-ui/duocolor/bar-chart-square-02';
import Building04Icon from '../../icons/untitled-ui/duocolor/building-04';
import CalendarIcon from '../../icons/untitled-ui/duocolor/calendar';
import CheckDone01Icon from '../../icons/untitled-ui/duocolor/check-done-01';
import CreditCard01Icon from '../../icons/untitled-ui/duocolor/credit-card-01';
import CurrencyBitcoinCircleIcon from '../../icons/untitled-ui/duocolor/currency-bitcoin-circle';
import File01Icon from '../../icons/untitled-ui/duocolor/file-01';
import GraduationHat01Icon from '../../icons/untitled-ui/duocolor/graduation-hat-01';
import HomeSmileIcon from '../../icons/untitled-ui/duocolor/home-smile';
import LayoutAlt02Icon from '../../icons/untitled-ui/duocolor/layout-alt-02';
import LineChartUp04Icon from '../../icons/untitled-ui/duocolor/line-chart-up-04';
import Lock01Icon from '../../icons/untitled-ui/duocolor/lock-01';
import LogOut01Icon from '../../icons/untitled-ui/duocolor/log-out-01';
import Mail03Icon from '../../icons/untitled-ui/duocolor/mail-03';
import Mail04Icon from '../../icons/untitled-ui/duocolor/mail-04';
import MessageChatSquareIcon from '../../icons/untitled-ui/duocolor/message-chat-square';
import ReceiptCheckIcon from '../../icons/untitled-ui/duocolor/receipt-check';
import Share07Icon from '../../icons/untitled-ui/duocolor/share-07';
import ShoppingBag03Icon from '../../icons/untitled-ui/duocolor/shopping-bag-03';
import ShoppingCart01Icon from '../../icons/untitled-ui/duocolor/shopping-cart-01';
import Truck01Icon from '../../icons/untitled-ui/duocolor/truck-01';
import Upload04Icon from '../../icons/untitled-ui/duocolor/upload-04';
import Users03Icon from '../../icons/untitled-ui/duocolor/users-03';
import XSquareIcon from '../../icons/untitled-ui/duocolor/x-square';
import { tokens } from '../../locales/tokens';
import { paths } from '../../paths';

export const getSections = (t) => [
  {
    items: [
      {
        title: t(tokens.nav.overview),
        path: paths.dashboard.index,
        icon: (
          <SvgIcon fontSize="small">
            <HomeSmileIcon />
          </SvgIcon>
        )
      }, 
      {
        title: t(tokens.nav.analytics),
        path: paths.dashboard.analytics,
        icon: (
          <SvgIcon fontSize="small">
            <BarChartSquare02Icon />
          </SvgIcon>
        )
      },
      {
        title: t(tokens.nav.ecommerce),
        path: paths.dashboard.ecommerce,
        icon: (
          <SvgIcon fontSize="small">
            <LineChartUp04Icon />
          </SvgIcon>
        )
      },
      {
        title: t(tokens.nav.account),
        path: paths.dashboard.account,
        icon: (
          <SvgIcon fontSize="small">
            <HomeSmileIcon />
          </SvgIcon>
        )
      }
    ]
  },
  {
    subheader: t(tokens.nav.concepts),
    items: [

      {
        title: t(tokens.nav.productList),
        path: paths.dashboard.products.index,
        icon: (
          <SvgIcon fontSize="small">
            <ShoppingBag03Icon />
          </SvgIcon>
        ),
        items: [
          {
            title: t(tokens.nav.list),
            path: paths.dashboard.products.index
          },
          {
            title: t(tokens.nav.create),
            path: paths.dashboard.products.create
          }
        ]
      },
      {
        title: t(tokens.nav.invoiceList),
        path: paths.dashboard.invoices.index,
        icon: (
          <SvgIcon fontSize="small">
            <ReceiptCheckIcon />
          </SvgIcon>
        ),
        items: [
          {
            title: t(tokens.nav.list),
            path: paths.dashboard.invoices.index
          },
          {
            title: t(tokens.nav.details),
            path: paths.dashboard.invoices.details
          }
        ]
      },
      {
        title: t(tokens.nav.logistics),
        path: paths.dashboard.logistics.index,
        icon: (
          <SvgIcon fontSize="small">
            <Truck01Icon />
          </SvgIcon>
        ),
        items: [
          {
            title: t(tokens.nav.dashboard),
            path: paths.dashboard.logistics.index
          },
          {
            title: t(tokens.nav.fleet),
            path: paths.dashboard.logistics.fleet
          }
        ]
      },
      {
        title: t(tokens.nav.fileManager),
        path: paths.dashboard.fileManager,
        icon: (
          <SvgIcon fontSize="small">
            <Upload04Icon />
          </SvgIcon>
        )
      },
    ]
  },
   {
    subheader: 'Misc',
    items: [
      {
        title: 'Level 0',
        icon: (
          <SvgIcon fontSize="small">
            <AlignLeft02Icon />
          </SvgIcon>
        ),
        items: [
          {
            title: 'Level 1a',
            items: [
              {
                title: 'Level 2a',
                items: [
                  {
                    title: 'Level 3a'
                  },
                  {
                    title: 'Level 3b',
                    disabled: true
                  }
                ]
              },
              {
                title: 'Level 2b'
              }
            ]
          },
          {
            title: 'Level 1b'
          }
        ]
      },
      {
        title: 'Disabled',
        disabled: true,
        icon: (
          <SvgIcon fontSize="small">
            <XSquareIcon />
          </SvgIcon>
        )
      },
      {
        title: 'Blank',
        path: paths.dashboard.blank,
        icon: (
          <SvgIcon fontSize="small">
            <File01Icon />
          </SvgIcon>
        )
      },
      {
        title: 'Retailys.com',
        path: 'https://retailys.com',
        icon: (
          <SvgIcon fontSize="small">
            <File01Icon />
          </SvgIcon>
        )
      }
    ]
  }
];
