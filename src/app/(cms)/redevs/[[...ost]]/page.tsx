import 'redevsmanage/outstatic.css'
import { Outstatic } from 'redevsmanage'
import { OstClient } from 'redevsmanage/client'

export default async function Page({ params }: { params: { ost: string[] } }) {
  const ostData = await Outstatic()
  return <OstClient ostData={ostData} params={params} />
}
