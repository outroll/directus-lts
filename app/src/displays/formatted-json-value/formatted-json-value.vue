<template>
	<value-null v-if="!displayValue" />
	<v-menu v-else-if="displayValue.length > 1" show-arrow>
		<template #activator="{ toggle }">
			<span class="toggle" @click.stop="toggle">
				<span class="label">
					{{ displayValue.length }}
					{{ t('items') }}
				</span>
			</span>
		</template>

		<v-list class="links">
			<v-list-item v-for="(item, index) in displayValue" :key="index">
				<v-list-item-content>
					{{ item }}
				</v-list-item-content>
			</v-list-item>
		</v-list>
	</v-menu>
	<span v-else>
		{{ displayValue[0] }}
	</span>
</template>

<script lang="ts">
import { render } from 'micromustache';
import { defineComponent, computed, PropType } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
	props: {
		value: {
			type: [Object, Array] as PropType<Record<string, any> | Record<string, any>[]>,
			default: null,
		},
		format: {
			type: String,
			default: null,
		},
	},
	setup(props) {
		const { t } = useI18n();

		const displayValue = computed(() => {
			if (!props.value) return null;

			try {
				if (Array.isArray(props.value)) {
					return props.value.map((item: any) => renderValue(item));
				} else {
					return [renderValue(props.value)];
				}
			} catch {
				return null;
			}
		});

		function renderValue(input: Record<string, any> | Record<string, any>[]) {
			if (props.format) {
				return render(props.format, input);
			} else {
				return render('{{ value }}', { value: input });
			}
		}

		return { displayValue, t };
	},
});
</script>
