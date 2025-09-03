import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

export const useThemeStyles = (isDarkTheme: boolean) => {
    return useMemo(
        () =>
            StyleSheet.create({
                container: {
                    flex: 1,
                    backgroundColor: isDarkTheme ? '#1C2526' : '#F5F6F5',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 16,
                },
                card: {
                    backgroundColor: isDarkTheme ? '#2E3B3E' : '#FFFFFF',
                    borderRadius: 12,
                    padding: 24,
                    alignItems: 'center',
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: isDarkTheme ? 0.3 : 0.2,
                    shadowRadius: 4,
                    elevation: 5,
                    width: '100%',
                    maxWidth: 400,
                },
                counterText: {
                    fontSize: 72,
                    fontWeight: 'bold',
                    color: isDarkTheme ? '#E8ECEF' : '#1C2526',
                    marginBottom: 32,
                    textAlign: 'center',
                },
                buttonContainer: {
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 12,
                },
                button: {
                    backgroundColor: isDarkTheme ? '#4CAF50' : '#2196F3',
                    paddingVertical: 12,
                    paddingHorizontal: 24,
                    borderRadius: 8,
                    minWidth: 100,
                    alignItems: 'center',
                },
                buttonText: {
                    color: '#FFFFFF',
                    fontSize: 16,
                    fontWeight: '600',
                },
                disabledButton: {
                    backgroundColor: isDarkTheme ? '#555555' : '#B0BEC5',
                },
            }),
        [isDarkTheme]
    );
};