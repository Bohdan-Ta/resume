import { zodResolver } from '@hookform/resolvers/zod'
import CloseIcon from '@mui/icons-material/Close'
import SendOutlined from '@mui/icons-material/SendOutlined'
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Snackbar,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { z } from 'zod'
import { profile } from '@/data/profile'
import { EmailJsError, isEmailJsConfigured, sendContactMessage } from '@/lib/emailjs'

const buildSchema = (t: (key: string) => string) =>
  z.object({
    name: z
      .string()
      .trim()
      .min(2, { message: t('contact.errors.nameMin') })
      .max(60, { message: t('contact.errors.nameMax') }),
    email: z
      .string()
      .trim()
      .email({ message: t('contact.errors.email') }),
    message: z
      .string()
      .trim()
      .min(10, { message: t('contact.errors.messageMin') })
      .max(2000, { message: t('contact.errors.messageMax') }),
  })

type FormValues = z.infer<ReturnType<typeof buildSchema>>

type Toast = { kind: 'success' | 'error'; message: string } | null

type Props = {
  open: boolean
  onClose: () => void
}

export const ContactDialog = ({ open, onClose }: Props) => {
  const { t } = useTranslation()
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const [toast, setToast] = useState<Toast>(null)
  const schema = buildSchema(t)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', message: '' },
  })

  useEffect(() => {
    if (!open) reset()
  }, [open, reset])

  const onSubmit = async (values: FormValues) => {
    try {
      if (!isEmailJsConfigured) {
        setToast({ kind: 'error', message: t('contact.errors.notConfigured') })
        return
      }
      await sendContactMessage(values)
      setToast({ kind: 'success', message: t('contact.feedback.success') })
      reset()
      onClose()
    } catch (err) {
      const detail = err instanceof EmailJsError ? ` (${err.status ?? '?'}: ${err.message})` : ''
      setToast({ kind: 'error', message: `${t('contact.feedback.error')}${detail}` })
    }
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={isSubmitting ? undefined : onClose}
        fullScreen={fullScreen}
        fullWidth
        maxWidth="sm"
        slotProps={{
          paper: {
            sx: {
              bgcolor: 'background.paper',
              backgroundImage: 'none',
              borderRadius: { xs: 0, sm: 2 },
              border: { sm: '1px solid' },
              borderColor: { sm: 'divider' },
            },
          },
        }}
      >
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 2,
            pb: 1,
          }}
        >
          <Box>
            <Typography
              variant="overline"
              sx={{
                color: 'primary.main',
                letterSpacing: '0.12em',
                display: 'block',
                fontFamily: 'overline.fontFamily',
              }}
            >
              {`// ${t('contact.eyebrow')}`}
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontSize: { xs: '1.5rem', sm: '1.75rem' }, fontWeight: 400, mt: 0.5 }}
            >
              {t('contact.dialogTitle')}
            </Typography>
          </Box>
          <IconButton
            aria-label={t('contact.actions.close')}
            onClick={onClose}
            disabled={isSubmitting}
            sx={{ color: 'text.secondary' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ pt: 1 }}>
          <Typography sx={{ color: 'text.secondary', mb: 3 }}>{t('contact.intro')}</Typography>
          <Box component="form" id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <Stack spacing={2.5}>
              <TextField
                {...register('name')}
                label={t('contact.fields.name')}
                error={Boolean(errors.name)}
                helperText={errors.name?.message ?? ' '}
                fullWidth
                autoComplete="name"
                autoFocus
              />
              <TextField
                {...register('email')}
                type="email"
                label={t('contact.fields.email')}
                error={Boolean(errors.email)}
                helperText={errors.email?.message ?? ' '}
                fullWidth
                autoComplete="email"
              />
              <TextField
                {...register('message')}
                label={t('contact.fields.message')}
                error={Boolean(errors.message)}
                helperText={errors.message?.message ?? ' '}
                fullWidth
                multiline
                minRows={5}
                maxRows={10}
              />
            </Stack>
          </Box>

          <Typography
            variant="caption"
            sx={{
              display: 'block',
              mt: 2,
              color: 'text.disabled',
              fontFamily: 'caption.fontFamily',
            }}
          >
            {t('contact.direct.label')}:{' '}
            <Box
              component="a"
              href={`mailto:${profile.email}`}
              sx={{
                color: 'text.secondary',
                textDecoration: 'none',
                '&:hover': { color: 'primary.main' },
              }}
            >
              {profile.email}
            </Box>
          </Typography>
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button onClick={onClose} disabled={isSubmitting} sx={{ color: 'text.secondary' }}>
            {t('contact.actions.cancel')}
          </Button>
          <Button
            type="submit"
            form="contact-form"
            variant="contained"
            disabled={isSubmitting}
            startIcon={
              isSubmitting ? (
                <CircularProgress size={16} sx={{ color: 'inherit' }} />
              ) : (
                <SendOutlined fontSize="small" />
              )
            }
            sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}
          >
            {isSubmitting ? t('contact.actions.sending') : t('contact.actions.send')}
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={Boolean(toast)}
        autoHideDuration={5000}
        onClose={() => setToast(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        {toast ? (
          <Alert
            onClose={() => setToast(null)}
            severity={toast.kind}
            variant="filled"
            sx={{ width: '100%' }}
          >
            {toast.message}
          </Alert>
        ) : undefined}
      </Snackbar>
    </>
  )
}
