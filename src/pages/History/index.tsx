import { Container, HistoryList, Status } from "./styles"

export function History() {
	return (
		<Container>
			<h1>Meu histórico</h1>
			<HistoryList>
				<table>
					<thead>
						<tr>
							<th>Tarefa</th>
							<th>Duração</th>
							<th>Início</th>
							<th>Status</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Tarefa 1</td>
							<td>3 min</td>
							<td>09:15</td>
							<td>
								<Status statusColor='green'>
									Concluído
								</Status>
							</td>
						</tr>
						<tr>
							<td>Tarefa 1</td>
							<td>3 min</td>
							<td>09:15</td>
							<td>
								<Status statusColor='green'>
									Concluído
								</Status>
							</td>
						</tr>
						<tr>
							<td>Tarefa 1</td>
							<td>3 min</td>
							<td>09:15</td>
							<td>
								<Status statusColor='green'>
									Concluído
								</Status>
							</td>
						</tr>
						<tr>
							<td>Tarefa 1</td>
							<td>3 min</td>
							<td>09:15</td>
							<td>
								<Status statusColor='green'>
									Concluído
								</Status>
							</td>
						</tr>
					</tbody>
				</table>
			</HistoryList>
		</Container>
	)
}